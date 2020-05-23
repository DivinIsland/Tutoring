function valueCheck(){
    if(firstValue.value!==''){
        if(secondValue.value!==''){
            return 1
        }else{
            return 0;
        }
    }else{
        return 0;
    }    
}

function calculate(){
    return firstValue.value * secondValue.value;
}