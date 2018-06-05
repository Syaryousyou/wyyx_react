import React from 'react'
import ReactDOM from 'react-dom'
import './mock/mockServer'
import Main from './components/main/main'
import './assets/css/reset.css'
import './assets/stylus/mixins.styl'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Route component={Main}/>
    </BrowserRouter>
  </Provider>
  ),
  document.getElementById('root')
)