import { getWords } from './sources';
import { applyChapters } from './main';


async function startGame(chapter){
  const words = await getWords();
  const main = document.querySelector('main');
  
  let currentWords;
  
  const fragment = new DocumentFragment();
  
  for (const c of words){
    if(c.chapter === chapter){
      currentWords = c.words;
    }
  }
  
  const initialList = currentWords.slice();
  const passedList = [];
  const successList = [];
  const failList = [];

  for (const word of currentWords){
    const card = document.createElement('div');
    card.className = 'card';
    const card__img = document.createElement('img');
    card__img.src = word.img;
    card.dataset.title = word.en
    card.appendChild(card__img);
    fragment.appendChild(card);
    card.addEventListener('click', (e) => {
      if (e.target.closest('div').dataset.title === passedList[0].en){
        successList.push(passedList[0]);
        card.classList.add('success');
        card.classList.remove('fail');
        const audio__success = new Audio('../assets/sounds/success.mp3')
        audio__success.play();
        button__game_start.classList.toggle('button__game_hidden');
        button__game_repeat.classList.toggle('button__game_hidden');
        randomSound();
      } else {
        failList.push(passedList[0]);
        card.classList.add('fail');
        card.classList.remove('success');
        const audio__fail = new Audio('../assets/sounds/fail.mp3')
        audio__fail.play();
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
      const greeting__success = document.createElement('span');
      greeting__success.textContent = `Success: ${successList.length} of 8`;
      const greeting__fail = document.createElement('span');
      greeting__fail.textContent = `Fail: ${failList.length} of 8`;
      const greeting__close = document.createElement('span');
      greeting__close.className = 'greeting__close'
      greeting__close.textContent = 'x';
      greeting__close.addEventListener('click', () => {
        main.removeChild(greeting);
        applyChapters();
      })
      greeting.appendChild(greeting__close);
      greeting.appendChild(greeting__success);
      greeting.appendChild(greeting__fail);
      main.appendChild(greeting);
    }
  }

  function repeatSound(){
    const sound = new Audio(passedList[0].sound)
    sound.play();
  }

  main.innerHTML = '';
  main.appendChild(fragment);
}

export { startGame }