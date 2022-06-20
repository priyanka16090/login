import React from "react";

class StateObject extends React.Component{
    constructor(props){
        super(props);
        this.state={fruit:"Apple",
    animal:"cow"};
    }
    changeFruit = () => {
        this.setState({fruit:"Mango"});
      }
    render(){
        return<div>
            <h1>Fruit {this.state.fruit} is very sweet</h1>
            <button type="button" onClick={this.changeFruit}>Change Fruit</button>
        </div>
    }
}
export default StateObject;