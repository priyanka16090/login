import React from "react";

class NewClass extends React.Component{
    constructor(props){
        super(props)
        this.state={name:"priyanka",year:1995,native:"yadgir",};
    }
    render(){
        return(
            <div>
                <h1>I am {this.state.name}</h1>
                <h2>From {this.state.native}</h2>
                <h3>Born in {this.state.year}</h3>
            </div>
        )
    }

}

function NewFunction(){
    return(
        <div>
            <h2>I Am Priyanka Reddy</h2>
        </div>
    )
}
function NewFunction1(){
    return(
        <div>
            <h1>What is your name?</h1>
            <NewFunction/>
        </div>
    )
}
class NewClass1 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>New Class name is {this.props.name}</h1>
        )
    }

}

class NewClass2 extends React.Component{
    
}
export default NewClass;
export {NewFunction1,NewClass1};