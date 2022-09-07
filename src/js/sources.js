async function getWords(){
  const response = await fetch('../assets/words.json');
  const words = await response.json()
  return words;
}

export { getWords }