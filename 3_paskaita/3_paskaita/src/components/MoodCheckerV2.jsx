import React, { Component } from "react";

class MoodCheckerV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Kaip jaučiatės?",
    };
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <h2>{message}</h2>
        <button>Jaučiuosi prastai:(</button>
        <button>Jaučiuosi normaliai:|</button>
        <button>Jaučiuosi puikiai:)</button>
      </div>
    );
  }
}

export default MoodCheckerV2;
