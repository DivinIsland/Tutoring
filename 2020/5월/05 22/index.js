const number = [];
for(let i = 1; i <= 45; i++){
  number.push(i)
}

setInterval(function(){
  const ranNum = Math.floor(Math.random() * number.length );
  
},100)