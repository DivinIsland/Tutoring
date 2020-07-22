function dataDraw(obj) {
  const { word, duplicateWord } = obj;
}

const normalArr = ["abc", "bcd", "poxoaozolo", "kjhs"];

const resultObj = {
  bigword: "",
  duplicate: null,
};

normalArr.forEach((elem) => {
  if (resultObj.bigword.length < elem.length) {
    resultObj.bigword = elem;
  }
});

const duplicateCheckArr = resultObj.bigword.split("");

duplicateCheckArr.reduce((acc, cur, i) => {});
