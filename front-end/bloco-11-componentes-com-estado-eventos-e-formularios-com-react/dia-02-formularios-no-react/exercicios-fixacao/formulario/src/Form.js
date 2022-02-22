import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();

    this.state = {
      nome: '',
      idade: 0,
      estadoFavorito: '',
      palavraChaveFavorita: '',
      perguntaReact: 'false',
    };

    this.handleEventChange = this.handleEventChange.bind(this);
  }
  
  handleEventChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
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
          <input type="number" name="idade"
            value={this.state.idade}
            onChange={this.handleEventChange} />
          </label>

          <label>
            <select name="palavraChaveFavorita"
              value={this.state.palavraChaveFavorita}
              onChange={this.handleEventChange}
            >
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>

          <label>
            Fale sobre seu estado Favorito, seja de React ou seja do Brasil:
            <textarea name="estadoFavorito" 
              value={this.state.estadoFavorito}
              onChange={this.handleEventChange} />
          </label>

          <label>
            Gosta de React?
            <input type="checkbox"
             name="perguntaReact"
             value={this.state.perguntaReact}
             onChange={this.handleEventChange} />
          </label>

        </form>
      </div>
    );
  }
}

export default Form;
