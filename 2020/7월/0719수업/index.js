//상속

class Common {
  constructor() {}

  el(elem) {
    return document.querySelector(`#${elem}`);
  }
}

class Page extends Common {
  //constructor :
  constructor(props) {
    super(props);
    this.config = {
      carName: props.name,
      pageName: props.pageName,
    };
  }

  run(callback) {
    const self = this;
    const setting = {
      config: self.config,
      parent: self,
    };

    callback(setting);
  }
}

const setting = {
  name: "benz",
  pageName: "login",
};

const page = new Page(setting);

page.run(function (props) {
  const { parent: pr } = props;
  console.log("run callback");
  console.log(props);
  console.log(props.parent);

  console.log(pr.el("root"));
});


async function(config){

  await axios.

}