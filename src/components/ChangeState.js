import { Component } from "react";

class ChangeState extends Component {
  state = {
    name: "Stepan",
    age: 25,
  };

  changeStateProp = (name, age) => {
    this.setState(() => ({ name, age }));
  };

  render() {
    const { name, age } = this.state;
    return (
      <>
        <p className="user-information__p">
          Name: {name}, age: {age}
        </p>
        <div className="wrap__button">
          <button
            className="changes-name__button"
            onClick={() => {
              this.changeStateProp("Mykola", 30);
            }}
          >
            Change state
          </button>
        </div>
      </>
    );
  }
}

export default ChangeState;
