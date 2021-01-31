import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      
        <img
          className="circle-img"
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="avatar_img"
          style={{
            borderRadius: "50%",
            border: "1px solid #fff",
           
            width: "50px",
            height: "50px"
          }}
        /><p><span>Rahul Sharma</span></p>
        <p style={{fontSize:"9px",color:"black"}}>Bangalore,Karnataka
          </p>
          
       
          
   
      
    </div>
  );
}

export default Contact;
