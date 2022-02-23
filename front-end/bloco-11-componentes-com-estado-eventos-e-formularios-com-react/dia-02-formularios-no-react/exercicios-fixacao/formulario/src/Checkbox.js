import React from "react";
import Proptypes from 'prop-types'

class Checkbox extends React.Component {
  render() {
    const { handleEventChange, perguntaReact } = this.props

    return(
      <label>
        Gosta de React?
        <input
          type="checkbox"
          name="perguntaReact"
          value={perguntaReact}
          onChange={handleEventChange}
        />
      </label>
    )
  }  
}

Checkbox.propTypes = {
  handleEventChange: Proptypes.func.isRequired,
  perguntaReact: Proptypes.bool.isRequired,
};

export default Checkbox
