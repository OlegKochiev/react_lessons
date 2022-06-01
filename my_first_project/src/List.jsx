import React from "react";

class Item extends React.Component {
  render() {
    return (
      <li>

      </li>
    )
  } 
}

class List extends React.Component {

  render() {
    const numbers = [1, 2, 3, 4, 5];
    let items = numbers.map((number) => { 
      return (
        <li key={ number.toString() }> 
          { number } 
        </li>
    )});
    return (
      <ul>{ items }</ul>
    )
  } 
}

export default List;