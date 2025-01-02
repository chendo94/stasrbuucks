const spinButton = document.getElementById('spinButton');
const resultDiv = document.getElementById('result');
const youtubePlayer = document.getElementById('youtubePlayer');

// Función para buscar videos en YouTube usando la API
async function fetchYouTubeVideos() {
  const apiKey = 'AIzaSyAm_AxD_vEjcaNdXDwhVgJG7Lszqw10yz8'; // Sustituye con tu API Key de YouTube
  const query = 'karaoke';
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=6&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items.map(item => `https://www.youtube.com/embed/${item.id.videoId}`);
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}

// Función principal para manejar el giro
spinButton.addEventListener('click', async () => {
  const videos = await fetchYouTubeVideos();
  if (videos.length === 0) {
    resultDiv.innerText = 'No se encontraron videos. Intenta de nuevo más tarde.';
    return;
  }

  const randomIndex = Math.floor(Math.random() * videos.length);
  const selectedVideo = videos[randomIndex];

  // Simula la rotación de la ruleta
  const spins = Math.floor(Math.random() * 5) + 3; // Entre 3 y 7 giros
  const degrees = spins * 360 + randomIndex * 60; // Cada segmento tiene 60 grados
  document.querySelector('.wheel-inner').style.transition = 'transform 4s ease-out';
  document.querySelector('.wheel-inner').style.transform = `rotate(${degrees}deg)`;

  // Mostrar el resultado después de la animación
  setTimeout(() => {
    resultDiv.innerText = `¡Video seleccionado: Karaoke #${randomIndex + 1}!`;
    youtubePlayer.src = selectedVideo;
    youtubePlayer.style.display = 'block';
  }, 4000);
});
