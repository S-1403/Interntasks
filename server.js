// server.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ---------- Helper functions for JSON file storage ----------
function loadData() {
  try {
    const data = fs.readFileSync("./recipes.json");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading recipes.json:", err);
    return [];
  }
}

function saveData(recipes) {
  try {
    fs.writeFileSync("./recipes.json", JSON.stringify(recipes, null, 2));
  } catch (err) {
    console.error("Error saving recipes.json:", err);
  }
}

// ---------- APIs ----------

// 1. Get all recipes
app.get("/api/recipes", (req, res) => {
  const recipes = loadData();
  res.json(recipes);
});

// 2. Get a single recipe
app.get("/api/recipes/:id", (req, res) => {
  const recipes = loadData();
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });
  res.json(recipe);
});

// 3. Create a new recipe
app.post("/api/recipes", (req, res) => {
  const recipes = loadData();
  const newRecipe = {
    id: recipes.length ? recipes[recipes.length - 1].id + 1 : 1,
    title: req.body.title,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    photo: req.body.photo || "default.jpg",
    comments: [],
    ratings: [],
    averageRating: 0
  };
  recipes.push(newRecipe);
  saveData(recipes);
  res.status(201).json(newRecipe);
});

// 4. Update a recipe
app.put("/api/recipes/:id", (req, res) => {
  const recipes = loadData();
  const recipeIndex = recipes.findIndex(r => r.id === parseInt(req.params.id));
  if (recipeIndex === -1) return res.status(404).json({ message: "Recipe not found" });

  recipes[recipeIndex] = { ...recipes[recipeIndex], ...req.body };
  saveData(recipes);
  res.json(recipes[recipeIndex]);
});

// 5. Delete a recipe
app.delete("/api/recipes/:id", (req, res) => {
  let recipes = loadData();
  const recipeIndex = recipes.findIndex(r => r.id === parseInt(req.params.id));
  if (recipeIndex === -1) return res.status(404).json({ message: "Recipe not found" });

  const deleted = recipes.splice(recipeIndex, 1);
  saveData(recipes);
  res.json(deleted[0]);
});

// 6. Post a comment
app.post("/api/recipes/:id/comments", (req, res) => {
  const recipes = loadData();
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });

  const comment = {
    user: req.body.user || "Anonymous",
    text: req.body.text,
    date: new Date()
  };

  recipe.comments.push(comment);
  saveData(recipes);
  res.status(201).json(comment);
});

// 7. Rate a recipe (1–5 stars)
app.post("/api/recipes/:id/rating", (req, res) => {
  const recipes = loadData();
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });

  const rating = req.body.rating;
  if (rating < 1 || rating > 5) return res.status(400).json({ message: "Rating must be 1–5" });

  recipe.ratings.push(rating);
  recipe.averageRating = recipe.ratings.reduce((a, b) => a + b, 0) / recipe.ratings.length;

  saveData(recipes);
  res.status(201).json({ averageRating: recipe.averageRating });
});

// ---------- Start server ----------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

