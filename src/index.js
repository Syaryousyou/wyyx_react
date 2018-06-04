import React from 'react'
import ReactDOM from 'react-dom'
import './mock/mockServer'
import Main from './components/main/main'
import './assets/stylus/mixins.styl'
import {HashRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Route component={Main}/>
    </HashRouter>
  </Provider>
  ),
  document.getElementById('root')
)