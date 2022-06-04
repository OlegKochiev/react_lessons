import './genderize.css'
import React, { useState } from "react";

function Button(props) {
  return (
    <button type="submit" id="button">Send</button>
  )
}

function LabelName(props) {
  return (
    <label className={'label' + ' ' + props.labelModificator}>
      {props.warningMessage}
    </label>
  )
}

function InputName(props) {
  function handleChange(e) {
    let name = e.target.value;
    props.handleChange(name);
    props.handleWarningMessage(name);
  }

  return (
    <input
      className={props.inputModificator}
      type="text"
      id="input"
      onChange={handleChange}>
    </input>
  )
}

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [sexValue, setSexValue] = useState('');
  const [warningMessage, setWarningMessage] = useState('Введите имя!');
  const [labelModificator, setLabelModificator] = useState('');
  const [inputModificator, setInputModificator] = useState('');

  function handleChange(inputValue) {
    setInputValue(inputValue);
  }

  function handleWarningMessage(name) {
    let warningMessage = ''
    let labelModificator = '';
    let inputModificator = '';

    if (name.length < 8) {
      warningMessage = 'Количество символов должно быть не менее 8!';
      labelModificator = 'label__red';
      inputModificator = 'input__red';
    } else {
      warningMessage = 'Количество символов удовлеетворяет норме!';
      labelModificator = 'label__green';
      inputModificator = 'input__green';
    }

    setWarningMessage(warningMessage);
    setLabelModificator(labelModificator);
    setInputModificator(inputModificator);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let sex = await this.handleRequest();
    this.setState({
      sexValue: sex.gender
    });
    console.log(sex);
  }

  async function handleRequest() {
    const firstName = this.state.inputValue;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    const response = await fetch(url);
    const sex = await response.json();
    return sex;
  }

  return (
    <form action="#" method="POST" id="form" onSubmit={handleSubmit}>
      <LabelName
        warningMessage={warningMessage}
        labelModificator={labelModificator}
      />
      <InputName
        inputModificator={inputModificator}
        handleChange={handleChange}
        handleWarningMessage={handleWarningMessage}
      />
      <Button />
    </form>
  )
}

export default Form;