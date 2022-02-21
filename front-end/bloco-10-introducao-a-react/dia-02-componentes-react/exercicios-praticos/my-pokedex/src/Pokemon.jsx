import React from "react";

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: { name, type, averageWeight, image },
    } = this.props;
    return (
      <div className="pokemon" >
        <p className="poke-name">{name}</p>
        <p className="poke-type">{type}</p>
        <p className="poke-average">
          {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        <img className="poke-image" src={ image } alt="Imagem Pokémon" />
      </div>
    );
  }
}
export default Pokemon;
