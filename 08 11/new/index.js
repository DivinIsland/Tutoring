function ex36() {
  function sum() {
    let total = 0;

    console.log(arguments);

    [...arguments].forEach((item) => {
      console.log(item);
    });

    for (i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }

    console.log(`Total : ${total}`);
  }

  sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
}

ex36();
