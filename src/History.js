import React from 'react'
import {Link} from 'react-router-dom'

export default class History extends React.Component {
  render () {
    return (
      <div>
        <Link to='/'>
          Retour à l'acceuil
        </Link>
        <p> Notre histoire </p>
      </div>
    )
  }
}
