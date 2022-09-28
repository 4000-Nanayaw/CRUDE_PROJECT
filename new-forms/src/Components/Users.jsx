import React from "react";
import User from "./User";
import { Container, Row } from "react-bootstrap";

const Users = (props) => {
  return (
    <Container>
      <Row>
        {props.userData.map((user) =>{
          return <User userInfo={user} key={user.id}
           AddUser={props.AddNewUser}
           deleteUser={props.deleteUser}
           EditUser={props.EditUser} />;
        })}
      </Row>
    </Container>
  );
};

export default Users;
