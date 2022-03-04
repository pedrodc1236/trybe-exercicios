import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const { person: { name, email, age, image } } = this.props;
        return (
            <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>{age}</p>
                <img src={ image } alt={ name } />
            </div>
        ); 
    }
}

export default PersonCard;