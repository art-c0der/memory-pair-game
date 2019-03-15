const content = document.getElementById('content');
const defaultButton = document.getElementById('defaultButton');
const cards = document.getElementsByClassName('card');
const gameScore = document.getElementById('gameScore');
const gameResult = document.getElementById('gameResult');

//arr wirh images (classes)
const imagesForCards = [
  'card_poroshenko',
  'card_timoshenko',
  'card_grycenko',
  'card_zelenskyi',
  'card_liashko',
  'card_vaider',
  'card_poroshenko',
  'card_timoshenko',
  'card_grycenko',
  'card_zelenskyi',
  'card_liashko',
  'card_vaider'
];

//shuffle items in array
const Shuffle = arr => {
  for (
    let j, x, i = arr.length;
    i;
    j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x
  );
  return arr;
};

//process cards content
const processCardsContent = (arr, content) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add(content[i]);
  }
};

processCardsContent(cards, Shuffle(imagesForCards));

//counter for score
let counter = 0;

//array for co
let selectionArr = [];

const compareCards = event => {
  console.log(selectionArr);
  if (selectionArr.length === 2) {
    selectionArr[0] === selectionArr[1]
      ? (console.log('match'), hideAfterCorrectSelection())
      : setTimeout(defaultCardsPosition, 1000);
    return (selectionArr = []);
  }
};

const rotateCard = event => {
  let target = event.target;
  while (target !== content) {
    if (target.hasAttribute('data-cardName')) {
      target.classList.add('rotate');
      counter++;
      return selectionArr.push(target.getAttribute('class'));
    }
    target = target.parentNode;
  }
};

const defaultCardsPosition = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.contains('rotate') ? cards[i].classList.remove('rotate') : null;
  }
};

const hideAfterCorrectSelection = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.contains('rotate') ? cards[i].classList.add('hidden') : null;
  }
};

const showGameScore = () => {
  return (gameScore.textContent = `Your score is: ${counter}`);
};

const showGameResult = () => {
  gameResult.classList.toggle('hide');
  return (gameResult.innerHTML = `<p><strong>Congratulations!</strong></p>
  Your result is: ${counter}`);
};

content.addEventListener('click', event => {
  rotateCard(event);
  compareCards();
  showGameScore();
});

defaultButton.addEventListener('click', showGameResult);

gameResult.addEventListener('click', () => {
  gameResult.classList.toggle('hide');
});
