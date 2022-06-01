import React from "react";
import './genderize.css';

class Button extends React.Component {
  render() {
    return (
      <button type="submit" id="button">Send</button>
    )
  } 
}

class InputName extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { inputValue: "" };
  }

  handleChange(e) {
    let name = e.target.value;
    this.setState({ inputValue: name })
    this.props.handleChange(name);
  }
  
  render() {
    return (
      <input type="text" id="input" onChange={ this.handleChange }></input>
    )
  } 
}

class LabelName extends React.Component {

  render() {
    return (
    <label className = "label">
      { this.props.inputValue }
    </label>  
  )} 
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', sexValue: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(inputValue) {
    this.setState({
      inputValue: inputValue
    });
  }

  async handleSubmit (e)  {
    e.preventDefault();
    let sex = await this.handleRequest();
    this.setState({
      sexValue: sex.gender
    });
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
        <LabelName inputValue = { this.state.inputValue } />
        <InputName handleChange = { this.handleChange }/>
        <Button />
      </form>
    )
  } 
}

export default Form;
