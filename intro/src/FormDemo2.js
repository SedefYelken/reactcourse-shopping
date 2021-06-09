import React, { Component } from "react";
import alertify from "alertifyjs";
import { FormGroup, Input, Label, Button, Form } from "reactstrap";

export default class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!",   3);
  };
  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>İstanbul</option>
              <option>Sakarya</option>
              <option>Ankara</option>
              <option>İzmir</option>
              <option>Muğla</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <br></br>
            <Button type="submit" onClick={this.handleSubmit}>
              save
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
