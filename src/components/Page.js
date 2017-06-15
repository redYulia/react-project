import React, {PropTypes, Component} from 'react'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.setYear(parseInt(e.target.textContent));
    }
    render () {
        console.log('page', this.props);
        const {year, photos} = this.props;
        return <div className='ib page'>
                <p>
                    <button onClick={this.onYearBtnClick.bind(this)} className="btn">2016</button>{' '}
                    <button onClick={::this.onYearBtnClick} className="btn">2015</button>{' '}
                    <button onClick={::this.onYearBtnClick} className="btn">2014</button>
                </p>
                <h3>{year}</h3>
                <p>You have {photos.length} photos.</p>
            </div>
    }
}