function makeDateOptions(config){
 const {target, list=[]} = config;

 const newOptionList = list.map((item) => {
   const optionElem = document.createElement("option");
   optionElem.value = item;
   optionElem.textContent = item;
   return optionElem;
 });

 target.append(...newOptionList);

}

