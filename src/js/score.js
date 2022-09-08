import { getWords } from './sources';
import { successList, failList } from './game';

function getRate(word){
  let rate = '';
  const success = successList.get(word);
  const fail = failList.get(word);
  if (success === undefined && fail === undefined){
    rate = '-';
  }
  if (success > 0 && fail === undefined){
    rate = '100%';
  }
  if (success === undefined && fail > 0){
    rate = '0%';
  }
  if (success > 0 && fail > 0) {
    rate = `${Math.ceil(success/(success + fail) * 100)}%`;
  }
  return `${rate}`;
}

function resetScore(){
  successList.clear();
  failList.clear();
  localStorage.clear();
  genScoreTable();
}

async function genScoreTable(){
  const main = document.querySelector('main');
  const fragment = new DocumentFragment()
  const words = await getWords();
  
  const buttons__wrapper = document.createElement('div');
  buttons__wrapper.className = 'buttons__wrapper';
  const button__reset = document.createElement('button');
  button__reset.textContent = 'Reset'
  button__reset.className = 'button__reset';
  button__reset.addEventListener('click', () => { resetScore() });
  buttons__wrapper.appendChild(button__reset);
  fragment.appendChild(buttons__wrapper);
  
  const table = document.createElement('table');
  table.className = 'score__table';
  const table__header = document.createElement('tr');
  let cell__header = document.createElement('th');
  cell__header.textContent = 'English';
  table__header.appendChild(cell__header);
  cell__header = document.createElement('th');
  cell__header.textContent = 'Russian';
  table__header.appendChild(cell__header);
  cell__header = document.createElement('th');
  cell__header.textContent = 'Success';
  table__header.appendChild(cell__header);
  cell__header = document.createElement('th');
  cell__header.textContent = 'Fail';
  table__header.appendChild(cell__header);
  cell__header = document.createElement('th');
  cell__header.textContent = 'Success score';
  table__header.appendChild(cell__header);
  table.appendChild(table__header);
  for (const c of words){
    for (const word of c.words){
      const row = document.createElement('tr');
      let cell = document.createElement('td');
      cell.textContent = word.en;
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = word.ru;
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = successList.get(word.en);
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = failList.get(word.en);
      row.appendChild(cell);
      cell = document.createElement('td');
      cell.textContent = getRate(word.en);
      row.appendChild(cell);
      table.appendChild(row)

      fragment.appendChild(table);
    }
  }
  main.innerHTML = '';
  main.appendChild(fragment);
}

export { genScoreTable }