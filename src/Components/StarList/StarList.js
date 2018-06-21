import React, { Component } from 'react';
import Star from '../Stars/Star';
import './StarList.css'

class StarList extends Component {
render() {
    return(
        <div>
            <h1>All Stars</h1>
            <ul>
                { this.props.starList.map( item => <Star star={item} /> ) }
            </ul>
        </div>
    )
}
}

export default StarList;