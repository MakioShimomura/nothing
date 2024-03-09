window.onload = function () {
  const title = document.getElementById('js-title');
  const paragraph = document.getElementById('js-paragraph');
  const startBtn = document.getElementById('js-start-btn');
  fadeIn(title);
  setTimeout(() => fadeIn(paragraph), 5000);
  setTimeout(() => {
    startBtn.classList.add('active');
    setTimeout(() => startBtn.classList.remove('active'), 2000);
  }, 26000)
};

function fadeIn(target) {
  const targetText = target.innerText;
  const targetCharacters = targetText.split('');
  var spannedText = targetCharacters.map((character) => {
    return '<span>' + character + '</span>';
  }).join('');
  target.innerHTML = spannedText;
  Array.from(target.children).forEach((character, index) => {
    setTimeout(() => {
      character.classList.add('active');
      setTimeout(() => {
        character.classList.remove('active');
      }, 1500)
    }, 200 * index)
  });
}
