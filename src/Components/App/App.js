import React, { Component } from 'react';

import './App.css';
import NewStar from '../NewStar/NewStar';
import Header from '../Header/Header'
import StarList from '../StarList/StarList'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: {name: '', famousFor: ''},
      starList: [ ],
    }
  }


    handleChangeFor = (propertyName) => (event) => {
    
    console.log(this.propertyName);
    
    this.setState({
      star: {
        ...this.state.star,
        [propertyName]: event.target.value
      }
      
    })}
    
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({starList: [...this.state.starList, this.state.star]});
      console.log(this.state.star);
      this.setState({star: {name: '', famousFor: ''}})
      
    }

  render() {
    return (
      <div className="App">
        < Header />
        < NewStar newStar= {this.state.star} 
        handleChangeFor = {this.handleChangeFor}
        handleSubmit = {this.handleSubmit} />
        <StarList starList ={this.state.starList} 
        
        />
      </div>
    );
  }
}

export default App;
