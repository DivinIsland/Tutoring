function good() {
  function toBinary(value) {
    const binaryArr = [];

    while (value >= 1) {
      const mod = value % 2;
      value = parseInt(value / 2);
      binaryArr.push(mod);
    }

    const completeData = binaryArr.reverse().join("");

    console.log(completeData);
  }

  const originalValue = 16;

  toBinary(originalValue);
}

function bad() {
  const originalValue = 3;

  console.log(originalValue.toString(2));
}

good();
// bad();
