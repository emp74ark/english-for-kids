import { startGame } from "./game";
import { currentChapter, setCurrentChapter, startTrain } from "./main";

let currentMode = false;
const nonGame = ['Main', 'Score']

function applyModeHandler(){
  const mode = document.createElement('div');
  mode.className = 'mode';
  
  const mode__input = document.createElement('input');
  mode__input.type = 'checkbox';
  mode__input.name = 'mode';
  mode__input.id = 'mode';
  const mode__label = document.createElement('label');
  mode__label.className = 'mode__handle'
  mode__label.for = 'mode';
  const mode__train = document.createElement('span');
  mode__train.textContent = 'Train';
  mode__train.className = 'mode__name';
  const mode__play = document.createElement('span');
  mode__play.textContent = 'Play';
  mode__play.className = 'mode__name mode__name_hidden';
  const mode__back = document.createElement('span');
  mode__back.className = 'mode__back';
  
  mode.appendChild(mode__input);
  mode.appendChild(mode__label);
  mode.appendChild(mode__train);
  mode.appendChild(mode__play);
  mode.appendChild(mode__back);

  mode.addEventListener('click', () => {
    mode__back.classList.toggle('mode__back_play');
    mode__label.classList.toggle('mode__handle_play');
    mode__train.classList.toggle('mode__name_hidden');
    mode__play.classList.toggle('mode__name_hidden');
    if (!currentMode && !nonGame.includes(currentChapter)){
      startGame(currentChapter);
    } 
    if (currentMode && !nonGame.includes(currentChapter)) {
      startTrain(currentChapter);
    }
    currentMode = currentMode ? false : true
  })

  document.body.appendChild(mode)
}

function setPlayMode(){
  setCurrentChapter();
  currentMode = true;
  const handle = document.querySelector('.mode__handle');
  const back = document.querySelector('.mode__back');
  const titles = document.querySelectorAll('.mode__name');
  const train = titles[0];
  const play = titles[1];
  handle.classList.add('mode__handle_play');
  back.classList.add('mode__back_play');
  train.classList.add('mode__name_hidden');
  play.classList.remove('mode__name_hidden');
}

export { applyModeHandler, currentMode, setPlayMode }