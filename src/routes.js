import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from './history'

import Navbar from './components/partials/Navbar'
import Supplier from './containers/Supplier'
import Expert from './containers/Expert'
import NotFoundPage from './containers/NotFoundPage'

class Routes extends Component {
  render () {
    return (
      <ConnectedRouter history={history}>
        <main>
          <Navbar />
          <Switch>
            <Route exact path='/supplier' component={Supplier} />
            <Route exact path='/expert' component={Expert} />
            <Route path='*' component={NotFoundPage} />
          </Switch>
        </main>
      </ConnectedRouter>
    )
  }
}

export default Routes
