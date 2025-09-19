<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webshop with Image Modal</title>
</head>
<body>

<div class="shop-container">
  <!-- Product 1 -->
  <div class="product-card">
    <img src="/images/jazzy.webp" alt="Our Jazzy Lives" class="product-image" onclick="openModal('/images/jazzy.webp', 'Our Jazzy Lives Print', 'Our Jazzy Lives is one of my personal favourites. It captures the hectic and uncertain nature of a society in war — drawn subconsciously after I had seen Picasso’s Guernica in Madrid just two weeks earlier. Screen printed on heavy A3 290g paper, with random red accents spread across the prints, making each one unique.', '18€', 'https://buy.stripe.com/9B63cv6G87BK7TRcHi0VO03')">
    <h3 class="product-title">Our Jazzy Lives</h3>
    <p class="product-price">18€</p>
    <a href="https://buy.stripe.com/9B63cv6G87BK7TRcHi0VO03" target="_blank" class="buy-button">Buy Now</a>
  </div>
  <!-- Product 2 -->
  <div class="product-card">
    <img src="/images/point.webp" alt="Lets Point Fingers!" class="product-image" onclick="openModal('/images/point.webp', 'Lets Point Fingers! Print', 'Originally drawn in Iran, this piece reflects on how easy it has become to point fingers and place blame rather than take responsibility for our own actions. Now available as a hand-pulled screen print on sturdy A3 290g paper, each print carries the same raw, playful energy as the original drawing.', '18€', 'https://buy.stripe.com/14A3cv8Og8FOb634aM0VO04')">
    <h3 class="product-title">Lets Point Fingers!</h3>
    <p class="product-price">18€</p>
    <a href="https://buy.stripe.com/14A3cv8Og8FOb634aM0VO04" target="_blank" class="buy-button">Buy Now</a>
  </div>
</div>

<!-- Modal for image expansion -->
<div id="imageModal" class="modal" onclick="closeModal()">
  <div class="modal-content" onclick="event.stopPropagation()">
    <span class="close-button" onclick="closeModal()">&times;</span>
    <div class="modal-body">
      <div class="modal-image-container">
        <img id="modalImage" src="" alt="" class="modal-image">
      </div>
      <div class="modal-info">
        <h2 id="modalTitle" class="modal-title"></h2>
        <p id="modalDescription" class="modal-description"></p>
        <div class="modal-purchase">
          <span id="modalPrice" class="modal-price"></span>
          <a id="modalBuyButton" href="" target="_blank" class="modal-buy-button">Buy Now</a>
        </div>
      </div>
    </div>
  </div>
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
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .product-image:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
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

  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    animation: fadeIn 0.3s ease;
  }
  
  .modal-content {
    position: relative;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 95%;
    padding: 20px;
  }
  
  .modal-body {
    display: flex;
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
    background: white;
    border-radius: 12px;
    padding: 2rem;
    animation: scaleIn 0.3s ease;
    max-height: 90vh;
    overflow-y: auto;
  }
  
  .modal-image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
  }
  
  .modal-image {
    max-width: 100%;
    max-height: 70vh;
    width: auto;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  }
  
  .modal-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
    padding-left: 1rem;
  }
  
  .modal-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
    font-weight: 600;
  }
  
  .modal-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .modal-purchase {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  
  .modal-price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  
  .modal-buy-button {
    display: inline-block;
    background: black;
    color: white;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }
  
  .modal-buy-button:hover {
    background: #444;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    color: #666;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1001;
    background: #f0f0f0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .close-button:hover {
    background: #e0e0e0;
    color: #333;
    transform: scale(1.1);
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes scaleIn {
    from { 
      transform: scale(0.5);
      opacity: 0;
    }
    to { 
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Mobile optimizations */
  @media (max-width: 768px) {
    .modal-content {
      padding: 10px;
    }
    
    .modal-body {
      flex-direction: column;
      padding: 1.5rem;
      gap: 1.5rem;
    }
    
    .modal-image-container {
      min-width: auto;
    }
    
    .modal-info {
      min-width: auto;
      padding-left: 0;
    }
    
    .modal-title {
      font-size: 1.5rem;
    }
    
    .modal-description {
      font-size: 1rem;
    }
    
    .modal-purchase {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }
    
    .close-button {
      top: 5px;
      right: 10px;
      font-size: 25px;
      width: 35px;
      height: 35px;
    }
  }
  
  @media (max-width: 480px) {
    .modal-body {
      padding: 1rem;
      margin: 10px;
    }
    
    .modal-title {
      font-size: 1.3rem;
    }
    
    .modal-description {
      font-size: 0.95rem;
    }
    
    .modal-price {
      font-size: 1.3rem;
    }
    
    .modal-buy-button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      width: 100%;
      text-align: center;
    }
  }
</style>

<script>
  function openModal(imageSrc, imageTitle, description, price, buyLink) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalBuyButton = document.getElementById('modalBuyButton');
    
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalImage.alt = imageTitle;
    modalTitle.textContent = imageTitle;
    modalDescription.textContent = description;
    modalPrice.textContent = price;
    modalBuyButton.href = buyLink;
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
  
  // Prevent modal from closing when clicking on the image itself
  document.getElementById('modalImage').addEventListener('click', function(event) {
    event.stopPropagation();
  });
</script>

</body>
</html>
