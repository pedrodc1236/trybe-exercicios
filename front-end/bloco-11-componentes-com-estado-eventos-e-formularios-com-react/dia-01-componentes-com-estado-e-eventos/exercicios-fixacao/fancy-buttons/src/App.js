import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.funBtn1 = this.funBtn1.bind(this);
    this.funBtn2 = this.funBtn2.bind(this);
    this.funBtn3 = this.funBtn3.bind(this);    

    this.state = {
      scoreBtn1: 0,
      scoreBtn2: 0,
      scoreBtn3: 0,
    };
  }

  funBtn1() {
    this.setState((previousState, _props) => ({
      scoreBtn1: previousState.scoreBtn1 + 1,
    }), () => {
      console.log(`Botão 1 ${this.verification(this.state.scoreBtn1)}`)
    });
  }
  
  funBtn2() {
    this.setState((previousState, _props) => ({
      scoreBtn2: previousState.scoreBtn2 + 1,
    }), () => {
      console.log(`Botão 2 ${this.verification(this.state.scoreBtn2)}`)
    });
  }
  
  funBtn3() {
    this.setState((previousState, _props) => ({
      scoreBtn3: previousState.scoreBtn3 + 1,
    }), () => {
      console.log(`Botão 2 ${this.verification(this.state.scoreBtn3)}`)
    });
  }

  verification(n) {
   return n % 2 === 0 ? 'green' : 'white'
  }

  render() {
    const { scoreBtn1, scoreBtn2, scoreBtn3 } = this.state;
    return (
      <div>
        <button style={{ backgroundColor: this.verification(scoreBtn1)}} onClick={ this.funBtn1 } >Button(1) | Cont: {this.state.scoreBtn1}</button>
        <button style={{ backgroundColor: this.verification(scoreBtn2)}} onClick={ this.funBtn2 } >Button(2) | Cont: {this.state.scoreBtn2}</button>
        <button style={{ backgroundColor: this.verification(scoreBtn3)}} onClick={ this.funBtn3 } >Button(3) | Cont: {this.state.scoreBtn3}</button>
      </div>
    );
  }
}

export default App;