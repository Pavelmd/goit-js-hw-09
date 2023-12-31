function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  const buttonStart = document.querySelector('[data-start]');
  const buttonStop = document.querySelector('[data-stop]');
  buttonStop.disabled = false;
  let timerId = null;


  buttonStart.addEventListener('click', () => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
  
    timerId = setInterval(() => {
      document.body.style.background = getRandomHexColor();
    }, 1000);
  });
  
  buttonStop.addEventListener('click', () => {
    clearInterval(timerId);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
  });
