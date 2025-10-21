const video = document.getElementById('bgVideo');
  const soundButton = document.getElementById('soundToggle');
  const volumeSlider = document.getElementById('volumeSlider');
  
  soundButton.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      soundButton.textContent = '🔊';
      volumeSlider.style.display = 'block';
    } else {
      video.muted = true;
      soundButton.textContent = '🔇';
      volumeSlider.style.display = 'none';
    }
  });
  
  volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
  });