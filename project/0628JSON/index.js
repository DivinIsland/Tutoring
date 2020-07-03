const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} jumped!`);
  },
};

const json = JSON.stringify(rabbit, (key, value) => {
  return key === "name" ? "cyg" : value;
});

const obj = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});

console.log(obj);
console.log(obj.birthDate);
