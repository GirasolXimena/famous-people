import React, { Component } from 'react';

class Star extends Component {

    render() {
        return(
            
                <li key={this.props.index} > 
                    {this.props.star.name} is famous for: {this.props.star.famousFor} 
                </li>
        )   
    }
}

export default Star;