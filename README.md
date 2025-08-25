
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>🍰 Tiramisu Recipe | La Dolce Vita</title>
  <style>
    body {
      font-family: "Poppins", sans-serif;
      margin: 0;
      padding: 0;
      background: #fffaf5;
      color: #333;
    }
    header {
      background: linear-gradient(135deg, #ff9a9e, #fecfef);
      padding: 30px;
      text-align: center;
      color: #222;
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
    header h1 {
      margin: 0;
      font-size: 2.8rem;
      font-family: "Georgia", serif;
    }
    header p {
      margin: 5px 0;
      font-size: 1.1rem;
    }
    nav {
      background: #222;
      padding: 12px;
      text-align: center;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    nav a {
      color: white;
      margin: 0 15px;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
    }
    nav a:hover {
      color: #ff9a9e;
    }
    section {
      padding: 40px;
      max-width: 950px;
      margin: auto;
    }
    h2 {
      color: #444;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }
    ul, ol {
      margin-left: 25px;
      line-height: 1.6;
    }
    img.recipe-img {
      width: 90%;
      max-width: 700px;
      border-radius: 20px;
      box-shadow: 0px 6px 18px rgba(0,0,0,0.25);
      display: block;
      margin: 25px auto;
      transition: transform 0.3s ease;
    }
    img.recipe-img:hover {
      transform: scale(1.03);
    }
    .footer {
      background: #111;
      color: #eee;
      text-align: center;
      padding: 25px;
      margin-top: 40px;
    }
    .footer a {
      color: #ff9a9e;
      text-decoration: none;
      margin: 0 12px;
      font-weight: bold;
      transition: color 0.3s;
    }
    .footer a:hover {
      color: #fecfef;
    }
    .extra-creativity {
      margin-top: 15px;
      font-size: 0.95rem;
      color: #bbb;
    }
    .extra-creativity span {
      display: inline-block;
      margin: 0 6px;
      animation: float 3s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
  </style>
</head>
<body>
  <header>
    <h1>🍴 La Dolce Vita Ristorante</h1>
    <p>Authentic Italian Cuisine at Its Finest</p>
    <p><strong>📍 Venue:</strong> Piazza della Signoria, Florence, Italy 🇮🇹</p>
  </header>

  <nav>
    <a href="#recipe">Recipe</a>
    <a href="#ingredients">Ingredients</a>
    <a href="#instructions">Instructions</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="recipe">
    <h2>🍰 Classic Italian Tiramisu</h2>
    <img src="https://www.simplyrecipes.com/thmb/JRcvXySbEqkWQOXH7nKyFFX4UUk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Tiramisu-LEAD-07-6c5719b0e3dc456d95a1b16c5e381f1d.jpg" 
         alt="Delicious Tiramisu" 
         class="recipe-img">
    
    <p><strong>Dish Type:</strong> Dessert</p>
    <p><strong>Prep Time:</strong> 30 minutes</p>
    <p><strong>Servings:</strong> 6</p>
  </section>

  <section id="ingredients">
    <h2>🥄 Ingredients</h2>
    <ul>
      <li>6 egg yolks</li>
      <li>3/4 cup sugar</li>
      <li>2 cups mascarpone cheese</li>
      <li>1 1/2 cups heavy whipping cream</li>
      <li>2 cups espresso or strong coffee</li>
      <li>2 packs ladyfinger biscuits</li>
      <li>Cocoa powder for dusting</li>
    </ul>
  </section>

  <section id="instructions">
    <h2>👨‍🍳 Instructions</h2>
    <ol>
      <li>Whisk egg yolks with sugar until pale and creamy.</li>
      <li>Add mascarpone cheese and blend until smooth.</li>
      <li>Whip the cream and fold into the mixture.</li>
      <li>Dip ladyfingers into coffee and layer them in a dish.</li>
      <li>Spread mascarpone mixture over the layer.</li>
      <li>Repeat layers and finish with mascarpone topping.</li>
      <li>Dust with cocoa powder and chill for at least 4 hours.</li>
    </ol>
  </section>

<script>
  fetch("http://localhost:5000/api/recipes/1")
    .then(res => res.json())
    .then(data => {
      document.getElementById("recipe-title").innerText = data.title;
      document.getElementById("recipe-desc").innerText = data.description;
      document.getElementById("recipe-img").src = data.photo;
    });
</script>

  <footer class="footer" id="contact">
    <p>
      🌐 <a href="https://ladolcevita-italy.com" target="_blank">Visit Our Website</a> | 
      📧 <a href="mailto:contact@ladolcevita.com">contact@ladolcevita.com</a> | 
      💻 <a href="https://github.com/S-1403" target="_blank">GitHub</a>
    </p>
    <div class="extra-creativity">
      <p>Made with ❤️ in Italy</p>
      <p>
        <span>🍷</span><span>🍝</span><span>🍕</span><span>🥂</span><span>🍰</span>
      </p>
    </div>
  </footer>
</body>
</html>
