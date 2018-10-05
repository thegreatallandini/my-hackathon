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
<br></br>
          <button className="btn btn-primary pt-3" onClick={this.handleSubmit}>Refresh</button>
      </form>

<div>

    <div >
  <h1>Jokes</h1>
 
      
  <div class="row">
  
    <div class="col-sm-6">

      <p>{this.state.jokes1}</p>
    </div>
    
    <div class="col-sm-6">

       <p>{this.state.jokes}</p> 
    </div>
  </div>
</div>



   
</div>

      </div>
   );
  }
}
export default App;
