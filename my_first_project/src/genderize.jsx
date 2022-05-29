import React from "react";
import './genderize.css';

class Button extends React.Component {
  render() {
    return (
      <button type="submit" id="button">Send</button>
    )
  } 
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    this.props.onInputValueChange(e.target.value);
  }

  render() {
    return (
      <input type="text" id="input" onKeyUp={ this.handleKeyUp }></input>
    )
  } 
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  handleInputKeyUp(inputValue) {
    this.setState({
      inputValue: inputValue
    });
  }

  async handleSubmit (e)  {
    e.preventDefault();
    let sex = await this.handleRequest();
    console.log(sex);
  }

  async handleRequest() {
    const firstName = this.state.inputValue;
    const serverUrl = 'https://api.genderize.io';
    const url = `${ serverUrl }?name=${ firstName }`;
    const response = await fetch(url);
    const sex = await response.json();
    return sex;
  }

  render() {
    return (
      <form action="#" method="POST" id="form" onSubmit={ this.handleSubmit }>
        <label>
          { this.state.inputValue } 
          <Input onInputValueChange={ this.handleInputKeyUp } /> 
        </label>
        <Button />
      </form>
    )
  } 
}

export default Form;
