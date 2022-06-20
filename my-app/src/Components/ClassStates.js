import React from "react";
class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Priyanka",
        native: "Yadgir",
        year: 1995,
        language:"kannada",
      };
    }
    render() {
      return (
        <div>
          <h1>I Am {this.state.name}</h1>
          <p>
            My native and language is {this.state.native}
            {this.state.language}
            year {this.state.year}.
          </p>
        </div>
      );
    }
  }
  export default Car;