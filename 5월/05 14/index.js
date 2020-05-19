function ex29() {

  var family = {
    'address': SecurityPolicyViolationEvent,
    members: {},
    addFamily: function (age, name, role) {
      this.members[role] = {
        age: age,
        name: name
      }
    }
  }

  var printMembers = function () {
    var members = family.members;
    for (role in members) {
      console.log('role=>' + role + ', name =>' + members[role].name + ', age=>' + members[role].age);
    }
  }


  printMembers();

  var members = family.members;
  members['nephew'] = { age: 3, name: 'cyg' };
  members.niece = { age: 4, name: 'mmj' };

  printMembers();

}//19

// ex29();

function ex30(){

  var address= "seoul"
  var members = {};
  var addFamily = function(age, name, role){
    this.members[role] = {age, name};
  };
  var getHeadCount = function(){
    return Object.keys(this.members).length;
    
  };

  var family = {address, members, addFamily, getHeadCount};

  family.addFamily(30, 'a', 'fa')
  family.addFamily(29, 'b', 'mo')
  family.addFamily(3, 'c', 'son')

  console.log(
    family.getHeadCount()
  )
  console.log(family)

}//ex30

// ex30();


function ex31(){
  
}