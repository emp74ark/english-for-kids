import { getWords } from './sources';
import { applyChapters } from './main';

const successList = !localStorage.success 
  ? new Map()
  : new Map(JSON.parse(localStorage.success));
const failList = !localStorage.fail 
  ? new Map()
  : new Map(JSON.parse(localStorage.fail));

let currentSuccessList = [];
let currentFailCounter = 0;

function updatedSavedData(){
  localStorage.clear();
  localStorage.setItem('success', JSON.stringify(Array.from(successList.entries())));
  localStorage.setItem('fail', JSON.stringify(Array.from(failList.entries())));
}

function updateScore(result, word){
  const table = result === 'success' ? successList : failList;
  if (table.has(word)){
    const counter = table.get(word) + 1;
    table.set(word, counter)
  } else {
    table.set(word, 1)
  }
}

async function startGame(chapter){
  const words = await getWords();
  const main = document.querySelector('main');
  
  let currentWords;
  
  const fragment = new DocumentFragment();
  
  for (const c of words){
    if(c.chapter === chapter){
      currentWords = c.words;
      const title = document.createElement('h2');
      title.textContent = c.chapter;
      fragment.appendChild(title);
    }
  }
  
  const initialList = currentWords.slice();
  const passedList = [];

  for (const word of currentWords){
    const card = document.createElement('div');
    card.className = 'card';
    const card__img = document.createElement('img');
    card__img.src = word.img;
    card.dataset.title = word.en
    card.appendChild(card__img);
    fragment.appendChild(card);
    card.addEventListener('click', (e) => {
      if (passedList.length > 0){
        const cardWord = e.target.closest('div').dataset.title;
        const puzzleWord = passedList[0]['en'];
        if (cardWord === puzzleWord){
          updateScore('success', puzzleWord);
          if (!currentSuccessList.includes(cardWord)){
            currentSuccessList.push(cardWord);
            const audio__success = new Audio('./assets/sounds/success.mp3')
            audio__success.play();
            card.classList.add('success');
            card.classList.remove('fail');
          }
          randomSound();
        } else {
          currentFailCounter++;
          updateScore('fail', puzzleWord);
          if (!currentSuccessList.includes(cardWord)){
            const audio__fail = new Audio('./assets/sounds/fail.mp3')
            audio__fail.play();
            card.classList.add('fail');
          }
        }
      }
    })
  }
  
  const button__game = document.createElement('div');
  button__game.className = 'button__game';
  const button__game_start = document.createElement('span');
  button__game_start.textContent = 'Start game';
  button__game_start.className = 'button__game_active';
  button__game.appendChild(button__game_start);
  const button__game_repeat = document.createElement('span');
  button__game_repeat.textContent = 'Repeat';
  button__game_repeat.className = 'button__game_active'
  button__game_repeat.classList.add('button__game_hidden');
  button__game.appendChild(button__game_repeat);
  button__game.addEventListener('click', (e) => {
    if (e.target.textContent === 'Start game'){
      button__game_start.classList.toggle('button__game_hidden');
      button__game_repeat.classList.toggle('button__game_hidden');
      randomSound();
    }
    if (e.target.textContent === 'Repeat'){
      repeatSound();
    }
  })
  fragment.appendChild(button__game);

  function randomSound(){
    if (passedList.length < 8) {
      const random = Math.floor(Math.random() * initialList.length);
      const sound = new Audio(initialList[random].sound)
      sound.play();
      passedList.unshift(initialList[random]);
      initialList.splice(random, 1)
    } else {
      const greeting = document.createElement('div');
      greeting.className = 'greeting';
      const greeting__img = document.createElement('img');
      const greeting__success = document.createElement('span');
      let currentSuccessCounter = 8 - currentFailCounter;
      greeting__success.textContent = `Right answers: ${currentSuccessCounter}`;
      const greeting__fail = document.createElement('span');
      greeting__fail.textContent = `Wrong answers: ${currentFailCounter}`;
      const greeting__close = document.createElement('span');
      greeting__close.className = 'greeting__close'
      greeting__close.innerHTML = '&times;';
      greeting__close.addEventListener('click', () => {
        main.removeChild(greeting);
        applyChapters();
      })
      greeting.appendChild(greeting__close);
      greeting.appendChild(greeting__img);
      greeting.appendChild(greeting__success);
      greeting.appendChild(greeting__fail);
      
      const win = new Audio('./assets/sounds/win.mp3');
      const loss = new Audio('./assets/sounds/loss.mp3');
      
      if (currentFailCounter !== 0){
        greeting__img.src = './assets/images/sad.jpg'
        loss.play();
      } else {
        greeting__img.src = './assets/images/smile.jpg'
        win.play();
      }
      const cards = document.querySelectorAll('.card');
      for (const card of cards){
        card.classList.add('card_hidden');
      }
      button__game.classList.add('card_hidden');
      
      main.appendChild(greeting);
      updatedSavedData();
      currentSuccessList = [];
    }
  }

  function repeatSound(){
    const sound = new Audio(passedList[0].sound)
    sound.play();
  }

  main.innerHTML = '';
  main.appendChild(fragment);
}

export { startGame, successList, failList }