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
    this.state = { 
      inputValue: '',
      warningMessage: 'Введите имя!',
      labelClass: 'red'
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    let name = e.target.value;
    this.props.onInputValueChange(name);
    if (name.length <= 2) {
      this.setState({
        warningMessage: "Необходимо ввести более 2-х символов!",
        labelClass: "label__warning red"
      });
    } else {
      this.setState({
        warningMessage: "Хорошо!",
        labelClass: "green"
      })
    }
  }

  render() {
    let warningMessage = '';
    return (
      <label className = { 'inputLabel' + ' ' + this.state.labelClass }>
        <input type="text" id="input" onKeyUp={ this.handleKeyUp }></input>
        { this.state.warningMessage }
      </label>
    )
  } 
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', sexValue: '' };
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
        <label className="label">
          { this.state.inputValue }
        </label>
        <Input onInputValueChange={ this.handleInputKeyUp } />
        <Button />
        <label className="label">
          { this.state.sexValue }
        </label>
      </form>
    )
  } 
}

export default Form;
