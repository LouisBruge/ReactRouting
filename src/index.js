import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'
import Home from './Home'
import History from './History'
import './index.css'

class App extends React.Component {
  render () {
    return (
      <div>

        <BrowserRouter>
          <div>
            <NavLink exact to='/'>Acceuil</NavLink>
            <NavLink to='/notre-histoire'>Histoire</NavLink>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/notre-histoire' component={History} />
            </Switch>

          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
)
