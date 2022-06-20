import React from "react";

// class House extends React.Component{
//     render(){
//         return <h1>I have a Big House</h1>
//     }
// }

/*class House extends React.Component {
   
    render() {
      return <h2>I have a Big House</h2>;
    }
  }
   class Rooms extends React.Component{
      render(){
          return( 
          <div>
              <h1>House having a number of rooms</h1>
            <House/>
          </div>
          );
      }
  }
export default House;
export {Rooms};*/

//class with properties, states,constructor,super method
/*class House extends React.Component{
    constructor(props){
        super(props);
        this.state={houseName:"Shanti Nilaya"};

        };
    
         changeColor = () => {
            this.setState({houseName:"Patil Nilaya"});
          }
        render(){
            return(
                <div>
                    <h1>My Home is {this.state.houseName}</h1>
                    <button type="button" onClick={this.changeColor}>Change Home</button>
                </div>
            )
        }
    }*/

class House extends React.Component{
    constructor(props){
        super();
        this.state={favFruit:"Apple"};
    }                           
    render(){
        return(
            <h1>My Favorit Fruit is{this.state.favFruit}</h1>
        )
    }

}
export default House;


// export {changeColor};