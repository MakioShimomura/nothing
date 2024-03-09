window.onload = () => {
  appearCalculator()
};

const appearCalculator = () => {
  const display = document.querySelector('.js-display');
  display.classList.add('active');
  setTimeout(function () {
    display.classList.remove('active');
  }, 1000);

  const buttons = document.querySelectorAll('.js-button');
  buttons.forEach(function (button) {
    button.classList.add('active');
    setTimeout(function () {
      button.classList.remove('active');
    }, 1000);

    button.addEventListener('click', () => {
      display.classList.add('active');
      setTimeout(function () {
        display.classList.remove('active');
      }, 800);
    });
  });
}
