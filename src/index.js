import React from 'react'
import ReactDOM from 'react-dom'
import './mock/mockServer'
import Main from './components/main/main'
import './assets/stylus/mixins.styl'
import {HashRouter, Route} from 'react-router-dom'
ReactDOM.render((
    <HashRouter>
      <Route component={Main}/>
    </HashRouter>
  ),
  document.getElementById('root')
)