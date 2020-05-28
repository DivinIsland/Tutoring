const menuNameK = document.querySelector('#menuNameK');
const menuNameE = document.querySelector('#menuNameE');
const menuPrice = document.querySelector('#menuPrice');
const addBtn = document.querySelector('#addBtn');
const showBtn = document.querySelector('#showBtn');

const menu = [];



addBtn.addEventListener('click', () => {
    addmenu(menuNameK.value, menuNameE.value, menuPrice.value);
    menuNameK.value = "";
    menuNameE.value = "";
    menuPrice.value = "";
})

showBtn.addEventListener('click', () => {
    console.log(menu);
})






function addmenu(k, e, price){

    const addmenu = {
        nameK : k,
        nameE : e,
        price : price
    };

    return menu.push(addmenu);

}

function showmenu(){

}