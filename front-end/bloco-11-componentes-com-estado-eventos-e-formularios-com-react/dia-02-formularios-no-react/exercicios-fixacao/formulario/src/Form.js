import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();

    this.state = {
      nome: '',
    };

    this.handleEventChange = this.handleEventChange.bind(this);
  }
  
  handleEventChange(event){
    this.setState({
      nome: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Formúlario</h1>
        <form>
          <label>Nome: 
          <input type="text" name="nome" value={this.state.nome} onChange={this.handleEventChange} />
          </label>
          <label> Idade:
          <input type="number" name="idade" />
          </label>

          <label>
            <select name="palavraChaveFavorita">
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>

          <label>
            Fale sobre seu estado Favorito, seja de React ou seja do Brasil:
            <textarea name="estadoFavorito" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
