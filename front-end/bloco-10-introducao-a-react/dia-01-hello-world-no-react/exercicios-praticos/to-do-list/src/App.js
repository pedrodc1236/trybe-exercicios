import './App.css';
import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const arrayCommitments = ['Varrer casa', 'Limpar Banheiro', 'Fazer almoço', "Arrumar a cama"]


class App extends Component {
  render(){
    return (
      <div className='to-do-list' >
        <h1>Lista De Tarefas</h1>
        <ul>{arrayCommitments.map((element) => Task(element))}</ul>
      </div>
    )
  }
}

export default App;
