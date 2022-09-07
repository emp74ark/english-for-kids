function applyHeader(){
  const header = document.createElement('header');
  
  const header__item = document.createElement('h1');
  header__item.textContent = 'English for kids';
  
  header.appendChild(header__item);
  document.body.appendChild(header);
}

export { applyHeader }