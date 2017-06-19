import React, {Component} from 'react';
import BanList from './BanList';
import SomePage from './SomePage';
import {Link, Route, Switch} from 'react-router-dom';

export default class Genre extends Component {
    render () {
        return <div>
            <p>Genre page</p>
            <ul>
                <li><Link to='/genre/somepage'>Genre Some Page</Link></li>
                <li><Link to='/genre/banlist'>Genre Ban List</Link></li>
            </ul>
            <Switch>
                <Route path='/genre/somepage' component={SomePage} />
                <Route path='/genre/banlist' component={BanList} />
            </Switch>
            {this.props.children}
        </div>
    }
}