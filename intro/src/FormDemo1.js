import React, { Component } from 'react'
import { Input } from 'reactstrap'

export default class FormDemo1 extends Component {
    state = {
        userName : '',
        city : ''
    }

    onChangeHandler = (event) => {
        //this.setState({userName:event.target.value})

        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        alert("userName : "+ this.state.userName + " City : " + this.state.city)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>User Name:</h3>
                    <Input name="userName" onChange={this.onChangeHandler} type="text"></Input>
                    <h3>User Name is {this.state.userName}</h3>

                    <h3>City:</h3>
                    <Input name="city" onChange={this.onChangeHandler} type="text"></Input>
                    <h3>City is {this.state.city}</h3>
                    <Input  type="submit">save</Input>
                </form>
            </div>
        )
    }
}
