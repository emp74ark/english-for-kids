import { getWords } from './sources';

const nav = document.createElement('nav');

async function genNav(){
  const fragment = new DocumentFragment()

  const burger__wrapper =  document.createElement('div');
  burger__wrapper.className = 'burger__wrapper';
  const burger__lines = document.createElement('span');
  burger__lines.className = 'burger__lines';
  burger__wrapper.appendChild(burger__lines);
  burger__wrapper.addEventListener('click', () => {
    burger__wrapper.classList.toggle('burger__wrapper_active');
    nav__list.classList.toggle('nav__list_active')
  })
  
  const words = await getWords();
  const nav__list = document.createElement('ul');
  nav__list.className = 'nav__list'
  for (const chapter of words){
    const nav__item = document.createElement('li');
    nav__item.textContent = chapter.chapter;
    nav__list.appendChild(nav__item);
  }
  nav__list.addEventListener('click', (e) => {
    console.log(e.target)
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