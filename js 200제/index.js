function ex30() {

  var address = 'Seoul';

  var members = {};

  var addFamily = function (age, name, role) {
    this.members[role] = { age, name };
  };

  var getHeadCount = function () {
    return Object.keys(this.members).length;
  };

  var family = { address, members, addFamily, getHeadCount };

  family.addFamily(30, 'abcd', 'abcg');
  family.addFamily(20, 'abce', 'abch');
  family.addFamily(10, 'abcf', 'abci');

  console.log(family.getHeadCount());
  console.log(family);

}

ex30();