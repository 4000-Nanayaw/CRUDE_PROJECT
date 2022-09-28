import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>NOTE APP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm userInfo={props.userInfo} EditUser={props.EditUser} 
          closeModal={handleClose}/>
        </Modal.Body>
      </Modal>
      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card style={{ width: "30rem" }}>
          <Card.Body style={{backgroundColor: "ghostwhite"}}>
            <Card.Title><p style={{backgroundColor: "steelblue", padding:"10px",color: "white"}}>Hard Guys Note App</p></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <h4>To add note start typing here</h4>
            {props.userInfo.name}
            </Card.Subtitle>
            <br />
            <hr />
            
            
            <Card.Subtitle className="mb-2 text-muted">
            <p>Date: {props.userInfo.email}</p>
            <hr />
              <p style={{color: "violet"}}>Note text: {props.userInfo.gen}</p>
            </Card.Subtitle>


            <Card.Link href="#">
            <hr />
              <Button variant="warning" size="sm" onClick={handleShow}>
                Edit note
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Cancel
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default User;
