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
  }

  handleChange(e) {
    let name = e.target.value;
    this.props.handleChange(name);
    this.props.handleWarningMessage(name);
  }

  render() {
    return (
      <input
        className={this.props.inputModificator}
        type="text"
        id="input"
        onChange={this.handleChange}>
      </input>
    )
  }
}

class LabelName extends React.Component {
  render() {
    return (
      <label className={'label' + ' ' + this.props.labelModificator}>
        {this.props.warningMessage}
      </label>
    )
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      sexValue: '',
      warningMessage: 'Введите имя!',
      labelModificator: '',
      inputModificator: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleWarningMessage = this.handleWarningMessage.bind(this);
  }

  handleChange(inputValue) {
    this.setState(() => {
      return {
        inputValue: inputValue
      }
    });
  }

  handleWarningMessage(name) {
    let labelMessage = ''
    let labelModificator = '';
    let inputModificator = '';
    if (name.length < 8) {
      labelMessage = 'Количество символов должно быть не менее 8!';
      labelModificator = 'label__red';
      inputModificator = 'input__red';
    } else {
      labelMessage = 'Количество символов удовлеетворяет норме!';
      labelModificator = 'label__green';
      inputModificator = 'input__green';
    }
    this.setState(() => {
      return {
        warningMessage: labelMessage,
        labelModificator: labelModificator,
        inputModificator: inputModificator
      }
    });
  }

  async handleSubmit(e) {
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
    const url = `${serverUrl}?name=${firstName}`;
    const response = await fetch(url);
    const sex = await response.json();
    return sex;
  }

  render() {
    return (
      <form action="#" method="POST" id="form" onSubmit={this.handleSubmit}>
        <LabelName
          warningMessage={this.state.warningMessage}
          labelModificator={this.state.labelModificator}
        />
        <InputName
          inputModificator={this.state.inputModificator}
          handleChange={this.handleChange}
          handleWarningMessage={this.handleWarningMessage}
        />
        <Button />
      </form>
    )
  }
}

export default Form;
