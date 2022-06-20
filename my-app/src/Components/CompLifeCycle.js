import React, { Component } from "react";

/*class Car extends React.Component{
    constructor(props){
        console.log("constructor");
        super(props);
        this.state={
            counter:0
        }
        this.increament=()=>this.setState({counter:this.state.counter+1});
        this.decreament=()=>this.setState({counter:this.state.counter-1});
    }
    render(){
        console.log("render");
        return<div>
            <button onClick={this.increament}>Increament</button>
            <button onClick={this.decreament}>Decreament</button>
            <div className="counter">Counter : {this.state.counter}</div>
        </div>
        
    }
}
export default Car;*/

/*class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      this.setState({show: false});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }
  export default Container;*/

  class CompLife extends Component{
    constructor(props){
      console.log("constructor");
      super(props);
      this.state={count:0};
    }
    componentDidMount(){
      console.log("componentDidMount");
    }

    shouldComponentUpdate(props,newState){
      if(newState.count%3==0){
        return true;
      }
      else{
        return false;
      }

    }

    componentDidUpdate(){
      console.log("componentDidUpdate");
    }

    handleClick(){
      this.setState({count:this.state.count+1});
    }
    render(){
      return(
        <div>
         <button onClick={this.handleClick.bind(this)}>Click Me</button>
         <br/>{this.state.count}
        </div>
      )
    }
  }
  export default CompLife;