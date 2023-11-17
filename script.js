const catImage = document.getElementById('catImage');
const meowSound = document.getElementById('meowSound');
const audioPlayer = document.getElementById('audioPlayer'); // Moved audio player selection outside of event listener

function getRandomCatImage() {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      const imageUrl = data[0].url;
      return imageUrl; // Return the image URL
    })
    .catch(error => {
      console.error('Error fetching cat image:', error);
      return null;
    });
}

function setRandomCatImage() {
  getRandomCatImage()
    .then(randomCatImage => {
      if (randomCatImage) {
        catImage.src = randomCatImage;
      }
    });
}

window.addEventListener('load', setRandomCatImage);

catImage.addEventListener('click', () => {
  meowSound.play();
});

// Check if the play button exists before adding an event listener
const playButton = document.querySelector('.secret-play-button');
if (playButton) {
  playButton.addEventListener('click', function() {
    audioPlayer.play();
  });
}
