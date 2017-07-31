import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

import registerServiceWorker from './registerServiceWorker'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import BaseLayout from './components/BaseLayout'
import App from './components/App'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'))
registerServiceWorker()
