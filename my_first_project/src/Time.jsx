import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.timer.time
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>      
        <h1>Привет, мир!</h1>      
        <h2>Время: { this.state.date.toLocaleTimeString() }.</h2>    
      </div>
    );
  } 
}
export default  Clock;
