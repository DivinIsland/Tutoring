function cal(func,num){
  return func(num)
}

function plus(num){
  return num+1;
}

function minus(num){
  return num-1;
}

console.log(
  cal(plus,2),
  cal(minus, 2)
);