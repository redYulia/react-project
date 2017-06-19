import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'
import Admin from './components/Admin'
import Genre from './components/Genre'
import Home from './components/Home'
import BanList from './components/BanList'
import SomePage from './components/SomePage'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

const store = configureStore()

console.log(store);

render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/genre' component={Genre} />
                <Route path='/admin' component={Admin} />
            </Switch>
        </App>
    </BrowserRouter>),
    document.getElementById('root')
);