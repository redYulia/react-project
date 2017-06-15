import React, {PropTypes, Component} from 'react'

export default class User extends Component {
    render () {
        console.log('user', this.props);
        const {name} = this.props;
        return <div className='user'>
                <p>Hello, {name}!</p>
            </div>
    }
}