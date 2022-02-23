import React, { Component } from "react";
import Proptypes from "prop-types";

class InfoPessoais extends Component {
  render() {
    const { handleEventChange, nome, idade, palavraChaveFavorita } = this.props;

    return (
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={handleEventChange}
          />
          {!nome.length ? " -nome inválido- " : " -ok- "}
        </label>
        <br />

        <label>
          {" "}
          Idade:
          <input
            type="number"
            name="idade"
            value={idade}
            onChange={handleEventChange}
          />
          {!idade.length ? " -idade inválida- " : " - ok- "}
        </label>

        <label>
          <br />
          Oque achou mais interessante?
          <select
            name="palavraChaveFavorita"
            value={palavraChaveFavorita}
            onChange={handleEventChange}
          >
            <option value="estado">Estado</option>
            <option value="evento">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

InfoPessoais.propTypes = {
  handleEventChange: Proptypes.func.isRequired,
  nome: Proptypes.string.isRequired,
  idade: Proptypes.number.isRequired,
  palavraChaveFavorita: Proptypes.string.isRequired,
};

export default InfoPessoais;
