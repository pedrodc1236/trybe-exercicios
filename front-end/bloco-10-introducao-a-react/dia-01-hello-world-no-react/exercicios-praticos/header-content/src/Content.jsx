import React, { Component } from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends Component {
    render(){
        return(
            conteudos.map((el) => (
               <div key={el.conteudo} className="card">           
                    <p><b>O conteúdo é: </b>{`${el.conteudo}`}</p>
                    <p><b>Status: </b>{`${el.status}`}</p>
                    <p><b>Bloco: </b>{`${el.bloco}`}</p>
               </div>
            ))
        )
    }
}

export default Content;