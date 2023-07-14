function sortBubble(arr: Array<number>) {
  let len = arr.length;
  let dupe = [...arr];

  for (let i = 0; i < len; i++)
    for (let j = 0; j < len; j++) {
      if (dupe[j] > dupe[j + 1]) {
        let varDupe = dupe[j];
        //console.log("var dupe : ", varDupe);
        dupe[j] = dupe[j + 1];
        //console.log("dupe[j] : ", dupe[j]);
        dupe[j + 1] = varDupe;
        //console.log("dupe[j] + 1 :", dupe[j + 1]);
      }
    }
  return dupe;
}

const randomNumber: Array<number> = [80, 65, 90, 75, 85, 70, 95, 60];
console.log(sortBubble(randomNumber));
