import { getWords } from './sources';
import { successList, failList, startGame } from './game';
import { setPlayMode } from './mode';

class ScoreItem {
  constructor(en, ru, img, sound) {
    this.en = en,
    this.ru = ru,
    this.img = img,
    this.sound = sound,
    this.success = successList.get(this.en) === undefined ? 0 : successList.get(this.en),
    this.fail = failList.get(this.en) === undefined ? 0 : failList.get(this.en),
    this.score = Math.ceil(this.success / (this.success + this.fail) * 100);
  }
}

const scoreFilterState = {
  'field': 'asc',
  'direction': 'dsc'
};

async function genScoreList(field = 'en', direction = 'asc'){
  const list = await getWords();
  const data = [];
  for (const chapter of list){
    for (const word of chapter.words) {
      data.push(new ScoreItem(word.en, word.ru, word.img, word.sound));
    }
  }
  
  scoreFilterState.field = field;
  scoreFilterState.direction = direction;

  if (direction === 'asc'){
    data.sort((a, b) => {
      return a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0;
    })
  }

  if (direction === 'dsc'){
    data.sort((a, b) => {
      return a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0;
    })
  }
  
  return data;
}

function resetScore(){
  successList.clear();
  failList.clear();
  localStorage.clear();
  genScoreTable();
}

function addButtons(){
  const buttons__wrapper = document.createElement('div');
  buttons__wrapper.className = 'buttons__wrapper';
  const button__reset = document.createElement('button');
  button__reset.textContent = 'Reset'
  button__reset.className = 'button__reset';
  button__reset.addEventListener('click', () => { resetScore() });
  buttons__wrapper.appendChild(button__reset);
  const button__repeat = document.createElement('button');
  button__repeat.textContent = 'Repeat'
  button__repeat.className = 'button__repeat';
  button__repeat.addEventListener('click', () => { 
    startGame('Repeat');
    setPlayMode();
  });
  buttons__wrapper.appendChild(button__repeat);
  return buttons__wrapper;
}

async function genScoreTable(field, direction){
  const main = document.querySelector('main');
  const fragment = new DocumentFragment()
  const words = await genScoreList(field, direction);
  
  const table = document.createElement('table');
  table.className = 'score__table';
  
  const table__header = document.createElement('tr');
  const table__columns = [
    {
      name: 'English', 
      id: 'en'
    }, 
    {
      name: 'Russian', 
      id: 'ru'
    }, 
    {
      name: 'Success',
      id: 'success'
    }, 
    {
      name: 'Fail', 
      id: 'fail'
    }, 
    {
      name: 'Success score', 
      id: 'score'
    }
  ];
  for (const cell__header of table__columns){
    const cell__data = document.createElement('th');
    cell__data.textContent = cell__header.name;
    cell__data.dataset.id = cell__header.id;
    table__header.appendChild(cell__data);
  }
  table__header.addEventListener('click', (e) => {
    const direction = scoreFilterState.direction === 'asc' ? 'dsc' : 'asc';
    genScoreTable(e.target.dataset.id, direction);
  })
  table.appendChild(table__header);
  
  for (const word of words){
    const row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.textContent = word.en;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.textContent = word.ru;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.textContent = word.success === 0 ? '-' : word.success;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.textContent = word.fail === 0 ? '-' : word.fail;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.textContent = isNaN(word.score) ? '-' : `${word.score}%`;
    row.appendChild(cell);
    table.appendChild(row)

    fragment.appendChild(table);
  }
  main.innerHTML = '';
  main.dataset.title = 'Score';
  main.appendChild(addButtons());
  main.appendChild(fragment);
}

export { genScoreTable, genScoreList }