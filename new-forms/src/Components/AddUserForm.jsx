import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
      id: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
      id: "",
    });
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Note Title</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Note Title"
            />

            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Date"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Note</Form.Label>
            <Form.Control
              type="text"
              name="gen"
              value={this.state.gen}
              onChange={this.handleChange}
              placeholder="Type here............."
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
