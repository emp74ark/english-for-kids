function applyFooter(){
  const footer = document.createElement('footer');
  
  const footer__item = document.createElement('div');
  footer__item.className = 'footer__item';
  const footer__item_img = document.createElement('img');
  footer__item_img.src = '../assets/icons/school.png';
  const footer__item_text = document.createElement('span');
  footer__item_text.textContent = 'Up-Skill Me';
  footer__item.appendChild(footer__item_img);
  footer__item.appendChild(footer__item_text);
  
  footer.appendChild(footer__item);
  document.body.appendChild(footer);

  footer.addEventListener('click', (e) => {
    console.log(e.target)
  })
}

export { applyFooter }
