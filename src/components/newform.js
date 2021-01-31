import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import "./newinput.css"
function Newform(){
  return(
<Form>
  <Form.Group className="input" controlId="formBasicEmail">
    
    <Form.Control className="input" type="email" placeholder="Enter Number*" />
    
  </Form.Group>

  <Form.Group  className="input" controlId="formBasicPassword">
   
    <Form.Control className="input" type="text" placeholder="Enter Name*" />
  </Form.Group>
  <Form.Group className="input" controlId="formBasicPassword">
   
    <Form.Control className="input" type="password" placeholder="Comments(optional)" />
  </Form.Group>
  
</Form>
  );}
  export default Newform;