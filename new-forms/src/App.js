// import React, { Component } from 'react';
// import'bootstrap/dist/css/bootstrap.min.css';
// import {Container,Row,Col} from 'react-bootstrap'
// import MainSite from './components/MainSite';
// import Users from './components/Users';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       users:[{
//         name: "To add a note start typing",
//         email: "Description",
//         password: "Title",
//         addressOne: "Detail",
//         addressTwo: "Title",
//         city: 'Accra',
//         state: "Accra",
//         contact: +233557290719,
//         zip: 233,
//         sign: ""
//       }]
      
//     }
//   }
//   render() {
//     return (
//       <div>
//         <MainSite />
//       <Container fluid>
//         <Row>
//           <Col md="4">form</Col>
//           <Col><Users userData={this.state.users}/></Col>
//         </Row>
//       </Container>
//       </div>
//     );
//   }
// }

// export default App;




import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Users from './Components/Users'
import AddUserForm from './Components/AddUserForm'
import MainSite from './Components/MainSite';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [{
        name: "Title Goes Here.....",
        email: "",
        gen: "",
      }],
    }
  }
  AddNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user],
    })
  }
  deleteUser = (id) => {
    let undeletedUser = this.state.users.filter((user) => user.id !== id)
    this.setState({
      users: undeletedUser,
    })
  }
  EditUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUser : user,
      ),
    })
  }
  render() {
    return (
      <>
      <MainSite />
      <Container fluid style={{ marginTop: '1rem' }}>
        <Row>
          <Col md="4">
            <AddUserForm AddUser={this.AddNewUser} />
          </Col>
          <Col>
            <Users
              userData={this.state.users}
              deleteUser={this.deleteUser}
              EditUser={this.EditUser}
              
            />
          </Col>
        </Row>
      </Container>
      
      </>
    )
  }
}

export default App
