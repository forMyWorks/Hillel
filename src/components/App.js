import { Component } from "react";

import ChangeState from "./ChangeState.js";
import ShowHideText from "./ShowHideText.js";

class App extends Component {
  render() {
    return (
      <>
        <ChangeState />
        <ShowHideText visibility={true} />
        <ShowHideText visibility={false} />
      </>
    );
  }
}

export default App;
