<div class="shop-container">
  <!-- Product 1 -->
  <div class="product-card">
    <img src="/images/jazzy.webp" alt="Product 1" class="product-image">
    <h3 class="product-title">Our Jazzy Lives Print</h3>
    <p class="product-price">20€</p>
    <a href="https://buy.stripe.com/9B6dR93tWbS0ca722E0VO01" target="_blank" class="buy-button">Buy Now</a>
  </div>

  <!-- Product 2 -->
  <div class="product-card">
    <img src="/images/point.webp" alt="Product 2" class="product-image">
    <h3 class="product-title">Lets Point Fingers! Print</h3>
    <p class="product-price">20€</p>
    <a href="https://buy.stripe.com/00wfZh5C46xG8XVfTu0VO02" target="_blank" class="buy-button">Buy Now</a>
  </div>

<style>
  .shop-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .product-card {
    background: #f9f9f9;
    padding: 1.5rem;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .product-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  .product-title {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  .product-price {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .buy-button {
    display: inline-block;
    background: black;
    color: white;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-size: 1rem;
    transition: background 0.3s ease;
  }

  .buy-button:hover {
    background: #444;
  }
</style>
