const randomBtn = el("#randomBtn");
const randomBox = el("#randomBox");

const testList = Array(100)
  .fill(true)
  .map((i, idx) => {
    return {
      id: idx,
      title: `Title ${idx}`,
    };
  });

console.log(testList);

init();

function init() {}
