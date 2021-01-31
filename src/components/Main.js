import React from "react";
import Card from "react-bootstrap/Card";
import Contact from "./Contact";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCreditCard } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import AccordionNew from "./AccordionDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./newinput.css";
import Newform from "./newform";

//import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

function CardComponent() {
  return (
    <div>
      <h5
        style={{
          textAlign: "center",
          padding: "10px"
        }}
      >
        Old Car Available
      </h5>
      <hr
        style={{
          alignContent: "center",
          backgroundColor: "#4c6adb",
          marginTop: "0.5em",
          marginBottom: "0.5em",
          marginLeft: "auto",
          marginRight: "auto",
          borderStyle: "inset",
          borderWidth: "1px",
          height: "5px",
          //marginLeft: "100px",
          width: "30%"
        }}
      />
      <Card className="text-center" style={{}}>
        <Card.Header
          class="center"
          style={{
            backgroundColor: "#202942",
            color: "white",
            height: "50px",
            textAlign: "center"
          }}
        >
          <h5
            style={{
              fontSize: "17px",
              padding: "3px"
            }}
          >
            Honda City
          </h5>
          <p
            style={{
              color: "#4d586f",
              fontSize: "14px",
              padding: "1px"
            }}
          >
            Posted at 1 Nov 1:30pm{" "}
          </p>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <p style={{ fontSize: "17px" }}>
              <FiBox
                style={{
                  color: "#d1d8dd",
                  padding: "1px"
                }}
              />{" "}
              <nbsp />
              Specialization 01{" "}
            </p>
            <p style={{ fontSize: "16px" }}>
              <FaTruckMoving
                style={{
                  color: "#d1d8dd",
                  padding: "1px"
                }}
              />
              <nbsp />
              Specialization 02
            </p>
            <p style={{ fontSize: "16px" }}>
              <BsCreditCard
                style={{
                  color: "#d1d8dd",
                  padding: "1px"
                }}
              />
              Specialization 03
            </p>
          </Card.Title>
          <Card.Text>
            <AccordionNew />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Contact />
        </Card.Footer>
      </Card>
      <h5
        style={{
          textAlign: "center",
          padding: "20px"
        }}
      >
        Place Your Load Bid
      </h5>
      <hr
        style={{
          alignContent: "center",
          marginTop: "0.5em",
          marginBottom: "0.5em",
          marginLeft: "auto",
          marginRight: "auto",
          borderStyle: "inset",
          borderWidth: "1px",
          backgroundColor: "#4c6adb",
          height: "5px",
          //marginLeft: "100px",
          width: "30%"
        }}
      />
      <Card className="text-center" style={{ padding: "10px" }}>
        <Card.Body>
          <Card.Title style={{ padding: "10px" }}>
            <div>
              <FaRupeeSign
                style={{
                  float: "center",
                  height: "50px"
                }}
              />
              <Form.Group className="input" controlId="formBasicPassword">
                <Form.Control className="input" type="text" placeholder="0" />
              </Form.Group>
              <div></div>
            </div>
            <Button variant="light" className="Button">
              Fixed Price
            </Button>
            <Button variant="light" className="Button">
              Negotiable
            </Button>
          </Card.Title>
          <Card.Text style={{ padding: "10px" }}>
            <Newform />
          </Card.Text>
        </Card.Body>
      </Card>
      <Button
        style={{
          color: "#2079e4",
          width: "100%",
          backgroundColor: "#cbddf6",
          padding: "10px",
          borderColor: "#cbddf6"
        }}
      >
        Bid Now
      </Button>{" "}
    </div>
  );
}
export default CardComponent;
