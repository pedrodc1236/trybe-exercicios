import React from "react";
import Checkbox from "./Checkbox";
import "./Form.css";
import InfoPessoais from "./InfoPessoais";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: "",
      idade: 0,
      estadoFavorito: "",
      palavraChaveFavorita: "",
      perguntaReact: "false",
    };

    this.handleEventChange = this.handleEventChange.bind(this);
  }

  handleEventChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Formúlario</h1>
        <form>
          <InfoPessoais
            handleEventChange={this.handleEventChange}
            nome={this.state.nome}
            idade={this.state.idade}
            palavraChaveFavorita={this.state.palavraChaveFavorita}
          />

          <fieldset>
            <legend>Texto e Arquivos</legend>

            <label>
              Fale sobre seu estado Favorito, seja de React ou seja do Brasil:
              <textarea
                name="estadoFavorito"
                value={this.state.estadoFavorito}
                onChange={this.handleEventChange}
              />
              {!this.state.estadoFavorito.length ? " - Texto vazio - " : " -ok- "}
            </label>

            <input type="file" />
          </fieldset>

          <Checkbox 
            handleEventChange={this.handleEventChange}
            perguntaReact={this.state.perguntaReact} 
          />
        </form>
      </div>
    );
  }
}

export default Form;
