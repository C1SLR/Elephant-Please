const slider = document.getElementById('reviewSlider');
let touchStartX = 0;
let touchEndX = 0;
let currentIndex = 0;
const slideWidth = document.querySelector('.w-full').offsetWidth; // Get slide width
const numSlides = slider.children.length;

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].clientX;
  const touchDiff = touchEndX - touchStartX;

  if (touchDiff > 50) { // Swipe right
    currentIndex = (currentIndex - 1 + numSlides) % numSlides;
  } else if (touchDiff < -50) { // Swipe left
    currentIndex = (currentIndex + 1) % numSlides;
  }
  goToSlide(currentIndex);
}

function goToSlide(index) {
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchend', handleTouchEnd);

// Initial setup
goToSlide(currentIndex);