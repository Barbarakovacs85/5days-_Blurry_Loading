const loadText = document.getElementById('loading-text');
const bg = document.getElementById('bg');

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
    loadText.style.opacity = 0;


    bg.classList.remove('blur-in');
    bg.classList.add('animateBg');
  }

  loadText.innerText = `${load}%`;

  const blurValue = 8 - (load / 100) * 8;
  bg.style.filter = `blur(${blurValue}px)`;
}
