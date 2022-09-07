function applyMode(){
  const mode = document.createElement('div');
  mode.className = 'mode';
  
  const mode__input = document.createElement('input');
  mode__input.type = 'checkbox';
  mode__input.name = 'mode';
  mode__input.id = 'mode';
  const mode__label = document.createElement('label');
  mode__label.for = 'mode';
  mode__label.className = 'mode__handle';
  const mode__train = document.createElement('span');
  mode__train.textContent = 'Train';
  mode__train.className = 'mode__name';
  const mode__play = document.createElement('span');
  mode__play.textContent = 'Play';
  mode__play.className = 'mode__name';
  mode__play.className = 'mode_hidden';
  const mode__back = document.createElement('span');
  mode__back.className = 'mode__back';
  
  mode.appendChild(mode__input);
  mode.appendChild(mode__label);
  mode.appendChild(mode__train);
  mode.appendChild(mode__play);
  mode.appendChild(mode__back);

  mode__label.addEventListener('click', () => {
    mode__back.classList.toggle('mode__back_play');
    mode__label.classList.toggle('mode__handle_play');
    mode__train.classList.toggle('mode_hidden');
    mode__play.classList.toggle('mode_hidden');
    mode__play.classList.toggle('mode__name_play');
  })

  document.body.appendChild(mode)
}

export { applyMode }