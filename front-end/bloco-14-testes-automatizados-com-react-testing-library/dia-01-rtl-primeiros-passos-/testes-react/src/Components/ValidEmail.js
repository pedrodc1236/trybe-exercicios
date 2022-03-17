// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

//Retorna true caso o email seja semelhante ao emailRegex, ou seja do mesmo formato, e false caso não seja do mesmo formato.
const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {
        email && (
          <h3
            data-testid="id-is-email-valid"
            className={verifyEmail(email) ?
            'green-text' : 'red-text'}
          >{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
        )
      }
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;