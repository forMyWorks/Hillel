import { Component } from "react";

class ShowHideText extends Component {
  state = {
    name: "Stepan",
    age: 25,
    visibility: this.props.visibility,
  };

  showText = (visibility) => {
    this.setState((state) => {
      return { visibility };
    });
  };
  render() {
    const { name, age, visibility } = this.state;
    const userInformation = visibility && (
      <p className="user-information__p">
        Name: {name}, age: {age}
      </p>
    );
    const buttonDescription = visibility ? "Hide" : "Show";
    return (
      <>
        {userInformation}
        <div className="wrap__button">
          <button
            className="changes-name__button"
            onClick={() => {
              this.showText(!visibility);
            }}
          >
            {buttonDescription}
          </button>
        </div>
      </>
    );
  }
}

export default ShowHideText;
