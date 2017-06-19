import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class Admin extends Component {
    render () {
        return <div>
            <p>Admin page</p>
            <ul>
                <li><Link to='/admin/somepage'>Some Page</Link></li>
                <li><Link to='/admin/banlist'>Ban List</Link></li>
            </ul>
            {this.props.children}
        </div>
    }
}