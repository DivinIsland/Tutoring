// function valueCheck(){
//     if(firstValue.value!==''){
//         if(secondValue.value!==''){
//             return 1
//         }else{
//             return 0;
//         }
//     }else{
//         return 0;
//     }    
// }

// function calculate() {
//     return firstValue.value * secondValue.value;
// }

function valueCheck(elem) {
    if (elem.value !== '') {
        return true;
    } else {
        return false;
    }
}

// function calculate(elem1,elem2) {
//     return elem1.value * elem2.value;
// }

function calculate(config){
    const {first, second} = config;
    return first * second;
}