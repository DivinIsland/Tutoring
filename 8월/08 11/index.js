class Hello {
  constructor(props) {
    this.config = {
      carName: props.name,
      pageName: props.pageName,
    };
  }

  run(callback) {
    const self = this;
    const setting = {
      config: self.config,
    };

    callback(setting);
  }
}

const setting = {
  name: "benz",
  pageName: "login",
};

const hello = new Hello(setting);

hello.run(function (props) {
  console.log("run callback");
  console.log(props, "props");
});
