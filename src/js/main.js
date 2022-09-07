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
    card__name.className = 'card__name';
    card__name.textContent = chapter.chapter;
    const card__counter = document.createElement('span');
    card__counter.className = 'card__counter';
    card__counter.textContent = chapter.words.length
    card.appendChild(card__img);
    card.appendChild(card__name);
    card.appendChild(card__counter);
    card.addEventListener('click', () => {
      genCards(chapter.chapter)
    })
    fragment.appendChild(card);
  }
  return fragment;
}

async function applyChapters(){
  main.innerHTML = '';
  const chapters = await genChapters()
  main.appendChild(chapters)
  document.body.appendChild(main)
}

async function genCards(chapter) {
  const fragment = new DocumentFragment()
  const words = await getWords();
  for (const c of words){
    if(c.chapter === chapter){
      for (const word of c.words){
        const card = document.createElement('div');
        card.className = 'card';
        const card_en = document.createElement('div');
        card_en.className = 'card_en';
        const card__img_en = document.createElement('img');
        card__img_en.src = word.img;
        const card__name_en = document.createElement('span');
        card__name_en.className = 'card__name';
        card__name_en.textContent = word.en;
        card_en.appendChild(card__img_en);
        card_en.appendChild(card__name_en);
        card.appendChild(card_en)
        const card_ru = document.createElement('div');
        card_ru.classList.add('card_ru');
        card_ru.classList.add('card_hidden')
        const card__img_ru = document.createElement('img');
        card__img_ru.src = word.img;
        const card__name_ru = document.createElement('span');
        card__name_ru.className = 'card__name';
        card__name_ru.textContent = word.ru;
        card_ru.appendChild(card__img_ru);
        card_ru.appendChild(card__name_ru);
        card.appendChild(card_en)
        card.appendChild(card_ru)
        
        const button_rotate = document.createElement('img');
        button_rotate.src = '../assets/icons/rotate.png';
        button_rotate.className = 'button__rotate';
        card.appendChild(button_rotate);
        button_rotate.addEventListener('click', () => {
          card_en.classList.toggle('card_hidden');
          card_ru.classList.toggle('card_hidden');
        })
        

        fragment.appendChild(card);
      }
    }
  }
  main.innerHTML = '';
  main.appendChild(fragment);
}

export { applyChapters, genCards }