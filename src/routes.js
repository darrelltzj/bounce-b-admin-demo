import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from './history'

import Navbar from './components/partials/Navbar'
import Home from './containers/Home'
import Supplier from './containers/Supplier'
import Expert from './containers/Expert'
import Admin from './containers/Admin'
import Product from './containers/Product'
import Article from './containers/Article'
import Video from './containers/Video'
import NotFoundPage from './containers/NotFoundPage'

class Routes extends Component {
  render () {
    return (
      <ConnectedRouter history={history}>
        <main>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/supplier' component={Supplier} />
            <Route exact path='/expert' component={Expert} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/products/:id' render={(props) => <Product {...props} />} />
            <Route exact path='/articles/:id' render={(props) => <Article {...props} />} />
            <Route exact path='/videos/:id' render={(props) => <Video {...props} />} />
            <Route path='*' component={NotFoundPage} />
          </Switch>
        </main>
      </ConnectedRouter>
    )
  }
}

export default Routes
