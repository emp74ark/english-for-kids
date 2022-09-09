import { getWords } from './sources';
import { successList, failList } from './game';

class ScoreItem {
  constructor(en, ru) {
    this.en = en,
    this.ru = ru,
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
      data.push(new ScoreItem(word.en, word.ru));
    }
  }
  
  if (field === 'en' && direction === 'asc'){
    scoreFilterState.field = 'en';
    scoreFilterState.direction = 'asc';
    data.sort((a,b) => {
      if(a.en < b.en){
        return -1;
      }
      if(a.en > b.en){
        return 1;
      }
      return 0;
    })
  }

  if (field === 'en' && direction === 'dsc'){
    scoreFilterState.field = 'en';
    scoreFilterState.direction = 'dsc';
    data.sort((a,b) => {
      if(a.en > b.en){
        return -1;
      }
      if(a.en < b.en){
        return 1;
      }
      return 0;
    })
  }

  if (field === 'ru' && direction === 'asc'){
    scoreFilterState.field = 'ru';
    scoreFilterState.direction = 'asc'
    data.sort((a,b) => {
      if(a.ru < b.ru){
        return -1;
      }
      if(a.ru > b.ru){
        return 1;
      }
      return 0;
    })
  }

  if (field === 'ru' && direction === 'dsc'){
    scoreFilterState.field = 'ru';
    scoreFilterState.direction = 'dsc'
    data.sort((a,b) => {
      if(a.ru > b.ru){
        return -1;
      }
      if(a.ru < b.ru){
        return 1;
      }
      return 0;
    })
  }

  if (field === 'success' && direction === 'asc'){
    scoreFilterState.field = 'success';
    scoreFilterState.direction = 'asc';
    data.sort((a,b) => b.success - a.success)
  }

  if (field === 'success' && direction === 'dsc'){
    scoreFilterState.field = 'success';
    scoreFilterState.direction = 'dsc';
    data.sort((a,b) => a.success - b.success)
  }

  if (field === 'fail' && direction === 'asc'){
    scoreFilterState.field = 'fail';
    scoreFilterState.direction = 'asc';
    data.sort((a,b) => b.fail - a.fail)
  }

  if (field === 'fail' && direction === 'dsc'){
    scoreFilterState.field = 'fail';
    scoreFilterState.direction = 'dsc';
    data.sort((a,b) => a.fail - b.fail)
  }

  if (field === 'score' && direction === 'asc'){
    scoreFilterState.field = 'score';
    scoreFilterState.direction = 'asc';
    data.sort((a,b) => b.score - a.score)
  }

  if (field === 'score' && direction === 'dsc'){
    scoreFilterState.field = 'score';
    scoreFilterState.direction = 'dsc';
    data.sort((a,b) => a.score - b.score)
  }
  
  return data;
}

function resetScore(){
  successList.clear();
  failList.clear();
  localStorage.clear();
  genScoreTable();
}

async function genScoreTable(field, direction){
  const main = document.querySelector('main');
  const fragment = new DocumentFragment()
  const words = await genScoreList(field, direction);
  
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
  table__header.addEventListener('click', (e) => {
    switch(e.target.closest('th').textContent) {
      case 'English':
        if (scoreFilterState.field === 'en' && scoreFilterState.direction === 'dsc'){
          genScoreTable('en', 'asc');
        } else {
          genScoreTable('en', 'dsc');
        }
        break;
      case 'Russian':
        if (scoreFilterState.field === 'ru' && scoreFilterState.direction === 'dsc'){
          genScoreTable('ru', 'asc');
        } else {
          genScoreTable('ru', 'dsc');
        }
        break;
      case 'Success':
        if (scoreFilterState.field === 'success' && scoreFilterState.direction === 'dsc'){
          genScoreTable('success', 'asc');
        } else {
          genScoreTable('success', 'dsc');
        }
        break;
      case 'Fail':
        if (scoreFilterState.field === 'fail' && scoreFilterState.direction === 'dsc'){
          genScoreTable('fail', 'asc');
        } else {
          genScoreTable('fail', 'dsc');
        }
        break;
      case 'Success score':
        if (scoreFilterState.field === 'score' && scoreFilterState.direction === 'dsc'){
          genScoreTable('score', 'asc');
        } else {
          genScoreTable('score', 'dsc');
        }
        break;
    }
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
  main.appendChild(fragment);
}

export { genScoreTable }