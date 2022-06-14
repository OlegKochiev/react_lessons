import React from 'react'
import './App.css'

function App (props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Tick />
        <Hello name="Jhon" />
        <Comment author={{
          name: 'Jhon',
          avatarUrl: './title.com',
          text: 'Lorem ipsum...'
        }} />
      </header>
    </div>
  )
}

class Hello extends React.Component {
  render (props) {
    return <h1>Hello {this.props.name} !</h1>
  }
}

function Tick (props) {
  const element = (
    <div>
      <h1>Hi!</h1>
      <h2>It is {new Date().toLocaleString()}</h2>
    </div>
  )
  return element
}

class Avatar extends React.Component {
  render () {
    return (
      <img className="Avatar"
        src={this.props.user.avatarUrl}
        alt={this.props.user.name}
      />
    )
  }
}

class UserInfo extends React.Component {
  render () {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">
          {this.props.author.name}
        </div>
      </div>
    )
  }
}

class Comment extends React.Component {
  render () {
    return (
      <div className="Comment">
        <UserInfo user={this.props.user}
          author={this.props.author}
        />
        <div className="Comment-text">
          {this.props.author.text}
        </div>
        <div className="Comment-date">
          {this.props.author.date}
        </div>
      </div>
    )
  }
}

export {
  App,
  Tick,
  Comment
}

/*
{{
  avatarUrl: 'https://someurl/com',
  name: 'Harry'}}
  author={{
    text:"Lorem Ipsum",
    date: new Date().toLocaleString()
  } */
