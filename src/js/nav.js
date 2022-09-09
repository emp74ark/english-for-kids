import { getWords } from './sources';
import { applyChapters, genCards } from './main';
import { genScoreTable } from './score';
import { currentMode } from './mode';
import { startGame } from './game';

const nav = document.createElement('nav');

async function genNav(){
  const fragment = new DocumentFragment()

  const burger__wrapper =  document.createElement('div');
  burger__wrapper.className = 'burger__wrapper';
  burger__wrapper.id = 'burger';
  const burger__lines = document.createElement('span');
  burger__lines.className = 'burger__lines';
  burger__wrapper.appendChild(burger__lines);
  function burgerToggle(){
    burger__wrapper.classList.toggle('burger__wrapper_active');
    nav__list.classList.toggle('nav__list_active')
  }
  function burgerClose(){
    burger__wrapper.classList.remove('burger__wrapper_active');
    nav__list.classList.remove('nav__list_active')
  }
  burger__wrapper.addEventListener('click', (e) => {
    burgerToggle();
  })
  document.body.addEventListener('click', (e) => {
    if (e.target.id !== 'burger'){
      burgerClose();
    }
  })
  
  const words = await getWords();
  const nav__list = document.createElement('ul');
  const nav__list_main = document.createElement('li');
  nav__list_main.textContent = 'Main page'
  nav__list.appendChild(nav__list_main);
  nav__list.className = 'nav__list'
  for (const chapter of words){
    const nav__item = document.createElement('li');
    nav__item.textContent = chapter.chapter;
    nav__list.appendChild(nav__item);
  }
  const nav__list_score = document.createElement('li');
  nav__list_score.textContent = 'Score'
  nav__list.appendChild(nav__list_score);
  nav__list.addEventListener('click', (e) => {
    const tag = e.target.closest('li').textContent;
    switch (tag) {
      case 'Main page':
        applyChapters();
        burgerToggle();
        break;
      case 'Score':
        burgerToggle();
        genScoreTable('en', 'asc');
        break;
      default:
        if(currentMode){
          startGame(tag)
        } else {
          genCards(tag);
        }
        burgerToggle();
    }
  })
  
  fragment.appendChild(burger__wrapper);
  fragment.appendChild(nav__list);

  return fragment;
}

async function applyNav(){
  const content = await genNav()
  nav.appendChild(content)
  document.body.appendChild(nav)
}

export { applyNav }