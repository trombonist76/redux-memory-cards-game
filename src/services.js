function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;
        
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

export const secToDate = (sec) => {
    return new Date(sec * 1000).toISOString().substring(14, 19);
  };

export default shuffle

