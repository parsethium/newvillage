

<div class="slideshow-container">
  <img class="slide" src="/images/back.webp" style="display: block;">
  <img class="slide" src="/images/front.webp" style="display: none;">
  <img class="slide" src="/images/climbing.webp" style="display: none;">
  <img class="slide" src="/images/frontzoom.webp" style="display: none;">
</div>

<p> After years of thinking about it, I finally bought 21 T-shirts, screen-printed the backs, and added a little block-printed bonus on the front. I’m selling them—probably just to buy more sketchbooks.
If you want to buy one, send me a message on instagram at: @in.newvillage</p>




<style>
  .slideshow-container {
    max-width: 100%;
    position: relative;
  }

  .slide {
    width: 100%;
    margin-bottom: 1rem;
  }

  .buy-button {
    background: black;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    font-family: inherit;
  }

  .buy-button:hover {
    background: #444;
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    let current = 0;
    const slides = document.querySelectorAll(".slide");
    if (!slides.length) return;

    setInterval(() => {
      slides[current].style.display = "none";
      current = (current + 1) % slides.length;
      slides[current].style.display = "block";
    }, 3000);
  });
</script>
