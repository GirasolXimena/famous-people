import React, { Component } from 'react';
class NewStar extends Component {


render () {
    return (
        <div>
            <h2>Add a star</h2>
            <form onSubmit= {this.props.handleSubmit}>
            <label>Name:</label>
                <input value={this.props.newStar.name}
                    onChange = {this.props.handleChangeFor('name')}/>
            <label>Famous For:</label>
                <input onChange = {this.props.handleChangeFor('famousFor')} 
                    value = {this.props.newStar.famousFor}/>
            <input type='submit' value='add star' /> 
            </form>
        </div>
    )
}
    
}
    export default NewStar; 