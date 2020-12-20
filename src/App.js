import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    proposedAnswer: Math.floor(Math.random() * 3),
    numQuestions: 0,
    numCorrect: 0
  }
  checkAnswer = (answer) => {
    const checksum = this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer + this.state.value1 + this.state.value2 + this.state.value3;
    if(answer === checksum){
      this.setState((currentState)=>({
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer: Math.floor(Math.random() * 3),
        numQuestions: currentState.numQuestions+1,
        numCorrect: currentState.numCorrect+1
      }))
    } else {
      this.setState((currentState)=>({
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer: Math.floor(Math.random() * 3),
        numQuestions: currentState.numQuestions+1
      }))
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer + this.state.value1 + this.state.value2 + this.state.value3}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
