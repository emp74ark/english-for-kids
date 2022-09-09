import { getWords } from './sources';
import { currentMode } from './mode';
import { startGame } from './game';

const main = document.createElement('main');

let currentChapter;

async function genChapters(){
  const fragment = new DocumentFragment()
  const words = await getWords();
  const title = document.createElement('h2');
  title.textContent = 'Main';
  fragment.appendChild(title);
  for (const chapter of words){
    const card = document.createElement('div');
    card.className = 'card';
    const card__img = document.createElement('img');
    card__img.src = chapter.img;
    const card__name = document.createElement('span');
    card__name.className = 'card__name';
    card__name.textContent = chapter.chapter;
    const card__counter = document.createElement('span');
    card__counter.className = 'card__counter';
    card__counter.textContent = `${chapter.words.length} words`
    card.appendChild(card__img);
    card.appendChild(card__name);
    card.appendChild(card__counter);
    card.addEventListener('click', () => {
      currentChapter = chapter.chapter;
      if (currentMode) {
        startGame(currentChapter);
      } else {
        genCards(currentChapter);
      }
    })
    fragment.appendChild(card);
  }
  return fragment;
}

async function applyChapters(){
  main.innerHTML = '';
  const chapters = await genChapters()
  main.appendChild(chapters)
  main.dataset.title = 'Main'
  document.body.appendChild(main)
}

async function genCards(chapter) {
  const fragment = new DocumentFragment()
  const words = await getWords();
  for (const c of words){
    if(c.chapter === chapter){
      const title = document.createElement('h2');
      title.textContent = c.chapter;
      fragment.appendChild(title);
      for (const word of c.words){
        const card = document.createElement('div');
        card.className = 'card';

        const card_en = document.createElement('div');
        card_en.className = 'card_en';
        let card__img = document.createElement('img');
        card__img.src = word.img;
        let card__name = document.createElement('span');
        card__name.className = 'card__name';
        card__name.textContent = word.en;
        card_en.appendChild(card__img);
        card_en.appendChild(card__name);
        let button_rotate = document.createElement('img');
        button_rotate.src = './assets/icons/rotate.png';
        button_rotate.className = 'button__rotate';
        card_en.appendChild(button_rotate);
        card.appendChild(card_en)

        const card_ru = document.createElement('div');
        card_ru.classList.add('card_ru');
        card__img = document.createElement('img');
        card__img.src = word.img;
        card__name = document.createElement('span');
        card__name.className = 'card__name';
        card__name.textContent = word.ru;
        card_ru.appendChild(card__img);
        card_ru.appendChild(card__name);
        button_rotate = document.createElement('img');
        button_rotate.src = './assets/icons/rotate.png';
        button_rotate.className = 'button__rotate';
        card_ru.appendChild(button_rotate);

        card_ru.addEventListener('mouseout', () => {
          card.classList.toggle('card__rotate');
        })
        
        card.appendChild(card_en)
        card.appendChild(card_ru)

        card.addEventListener('click', (e) => {
          if (e.target.className === 'button__rotate'){
            card.classList.toggle('card__rotate')
          } else {
            const sound = new Audio(word.sound);
            sound.play();
          }
        })

        fragment.appendChild(card);
      }
    }
  }
  main.innerHTML = '';
  main.dataset.title = chapter;
  main.appendChild(fragment);
}

export { applyChapters, genCards, currentChapter }