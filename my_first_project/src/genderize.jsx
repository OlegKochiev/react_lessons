import React from "react";
import './genderize.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.input = document.getElementById('input');
  }
  render() {
    return (
      <input type="text" id="input"></input>
    )
  } 
}

class Button extends React.Component {
  render() {
    return (
      <button type="submit" id="button">Send</button>
    )
  } 
}

class Form extends React.Component {

  handleSubmit (e)  {
    console.log('hello submit');
    console.log(this);
    e.preventDefault();
  }

  render() {
    return (
      <form action="#" method="POST" id="form" onSubmit={ this.handleSubmit }>
        <label>
          { "Hi label" }
          <Input /> 
        </label>
        <Button />
      </form>
    )
  } 
}

export default Form;
