import React from "react";
import Image from "./Image";
import PropTypes from 'prop-types'

class UserProfile extends React.Component {
  render(){
    return(
      <div>
        <p>Seja bem vindo {this.props.user.name}, seu email é {this.props.user.email}</p>
        <Image image={this.props.user.avatar} />
      </div>
    )
  }
}

export default UserProfile;