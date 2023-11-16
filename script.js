const catImages = [
    'catImages/cat1.png',
    'catImages/cat2.png',
    'catImages/cat3.png',
    'catImages/cat4.png',
    'catImages/cat5.png',
    // Add more images with correct relative paths
  ];
  
  const catImage = document.getElementById('catImage');
  const meowSound = document.getElementById('meowSound');
  
  // Function to get a random cat image from the catImages array
  function getRandomCatImage() {
    const randomIndex = Math.floor(Math.random() * catImages.length);
    return catImages[randomIndex];
  }
  
  // Waiting for user to click on the cat image and play the meow sound
  catImage.addEventListener('click', () => {
    meowSound.play();
  });
  
  // Sets a random cat image on page load
  window.addEventListener('load', () => {
    const randomCatImage = getRandomCatImage();
    catImage.src = randomCatImage;
  });