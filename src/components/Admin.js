import React, {Component} from 'react';
import BanList from './BanList';
import SomePage from './SomePage';
import {Link, Route, Switch} from 'react-router-dom';

export default class Admin extends Component {
    render () {
        return <div>
            <p>Admin page</p>
            <ul>
                <li><Link to='/admin/somepage'>Some Page</Link></li>
                <li><Link to='/admin/banlist'>Ban List</Link></li>
            </ul>
            <Switch>
                <Route path='/admin/somepage' component={SomePage} />
                <Route path='/admin/banlist' component={BanList} />
            </Switch>
            {this.props.children}
        </div>
    }
}