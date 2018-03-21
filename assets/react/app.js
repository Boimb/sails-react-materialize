import React, { Component } from 'react'
import './style/style.scss'
import { Provider } from 'react-redux'
import store, { history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import Header from './components/header/header'
import Main from './components/main/main-container'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import About from './components/about/about'


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div id='wrapper'>
            <Header />
            <Main>
              {["/", "/home"].map(path =>(<Route exact path={path} component={Home} />) )}
              <Route exact path="/about" component={About} />
            </Main>
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
