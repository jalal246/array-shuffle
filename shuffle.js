// https://stackoverflow.com/a/6274398/6348157

export default function shuffle(array = []) {
  let counter = array.length;
  const shuffled = array.slice();

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter);
    // Decrease counter by
    counter -= 1;

    // And swap the last element with it
    const temp = shuffled[counter];

    shuffled[counter] = shuffled[index];

    shuffled[index] = temp;
  }

  return shuffled;
}
