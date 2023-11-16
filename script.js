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

function getRandomCatImage() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      const imageUrl = data[0].url;
      const img = new Image();
      img.onload = function() {
        catImage.src = imageUrl;
      };
      img.src = imageUrl;
    })
    .catch(error => {
      console.error('Error fetching cat image:', error);
    });
}

function setRandomCatImage() {
  const randomCatImage = getRandomCatImage();
  catImage.src = randomCatImage;
}

window.addEventListener('load', setRandomCatImage);

catImage.addEventListener('click', () => {
  meowSound.play();
});
