import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Comp2 from "./Comp2";



const Comp1=(props)=>{
    console.log(props)
    // this.state={
    //     name:"suma",
    //     year:1996,
    // }
  
    const deleteItem = (item, props) => {
        console.log(item);
        // do something to pass the ITEM to parent comp (App.js);
        props.onDelete(item);
    } 

    return(
        <Row>
        
        <Col md={{ span: 5, offset: 4 }}>
         {props?.list?.length &&
          <ListGroup style={{background: "red"}}>
            {props.list.map((item) => {
            const btn={
                height:"40px",
                width:"100px",
                padding:"10px",
                background:"blue"
            
            }
                return (
                <ListGroup.Item style={{background:'#ffffff50', border: '2px solid blue'}} key={item.id} onClick={()=> {deleteItem(item, props)}}>
                    <h1>{item.value}</h1>
                </ListGroup.Item>
                
                );
            })}
            </ListGroup>
         }
        </Col>
        <Comp2/>
      </Row>
    )
}


export default Comp1;
