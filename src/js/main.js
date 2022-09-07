import { getWords } from './sources';

const main = document.createElement('main');

async function genChapters(){
  const fragment = new DocumentFragment()
  const words = await getWords();
  for (const chapter of words){
    const card = document.createElement('div');
    card.className = 'card';
    const card__img = document.createElement('img');
    card__img.src = chapter.img;
    const card__name = document.createElement('span');
    card__name.textContent = chapter.chapter;
    card.appendChild(card__img);
    card.appendChild(card__name);
    fragment.appendChild(card);
  }
  return fragment;
}

async function applyChapters(){
  const chapters = await genChapters()
  main.appendChild(chapters)
  document.body.appendChild(main)
}

export { applyChapters }