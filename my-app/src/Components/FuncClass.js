import React from "react";

/*//creat function
function NewFunc(){
    return<>
    <h2>Helooo...</h2>
    </>
}

//calling function one here
function NewFunc2(){
    return<>
    <h1>Hi...</h1>
    <NewFunc/>
    </>
}

//crete class
class Home extends React.Component{
    constructor(props){
        super();
        this.state={name:"priyanka"};
    }
    render(){
        return<>
        <h3>How Are You {this.state.name} ?</h3>
        </>
    }
}
export default NewFunc2;
export {Home};*/

class Monkey extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Monkey",
        stay: "Tree",
        color: "Black",
        
      };
    }
    changeColor=()=>{
        this.setState({color:"Red"});
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {color: props.favcol };
    //   }
    render() {
      return (
        <div>
          <h1>My {this.state.name}</h1>
          <h2>Color  {this.state.color} </h2>
        <button type="button" onClick={this.changeColor}>Change Color</button>
        </div>
      );
    
    }
  }
  export default Monkey;