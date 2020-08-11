var grades = {
  'list' : {'egoing' : 10, 'k8805' : 8, 'sorialgi' : 80},
  'show' : function(){
    for(var name in this.list){
      console.log(name, this.list[name]);
    }    
  }
}

grades.show();