function alternateChange(string) {
  const txtArr = Array.from(string).map((elem, idx) => {
    if (idx % 2 === 1) {
      return elem;
    } else {
      return elem.toUpperCase();
    }
  });

  console.log(txtArr.join(""));
}

const txtString = prompt();

alternateChange(txtString);
