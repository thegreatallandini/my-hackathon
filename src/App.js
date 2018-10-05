import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

constructor() {
  super();
  
    this.state = {
      jokes1: '',
      jokes: '',

    };}

  handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://geek-jokes.sameerkumar.website/api`)
    .then(res => {
      const jokes = res.data;
      console.log(jokes);

    axios.get(`https://api.chucknorris.io/jokes/random`)
    .then(res => {
      const jokes1 = res.data.value;
      
      this.setState({
         jokes1: jokes1,
         jokes: jokes
        });
      console.log(jokes1);
    })  
   })
    }

      render() {
        return (

          <div className="App">
        <header className="App-header">
          <h1 className="title">*HaCkAtHon</h1>
        </header>
      <form>
          <button class="btn btn-primary" onClick={this.handleSubmit}>Refresh</button>
      </form>

<div>


  <p>{this.state.jokes}</p>  
   <p>{this.state.jokes1}</p>
   
</div>

      </div>
   );
  }
}
export default App;
