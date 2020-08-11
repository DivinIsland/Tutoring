function solutionFunc(arr) {
  const txtProcessArr = arr.map((elem, idx) => {
    if (idx < arr.length - 1) {
      elem = elem[0].toUpperCase();
    } else {
      const firstChar = elem.substr(0, 1).toUpperCase();
      const restChar = elem.substr(1);
      elem = firstChar.concat(restChar);
    }

    return elem;
  });

  drawData(txtProcessArr);
}

function drawData(arr) {
  console.log(arr.join("."));
}

const txtString = prompt("input");

const txtArr = txtString.split(" ");

solutionFunc(txtArr);
