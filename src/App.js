import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

constructor(props) {

  super(props);
  
    this.state = {

      // term: '',

      img: '',

      jokes: '',

      
    };

  }

  // onChange = (event) => {
  //     this.setState({term: event.target.value}); }
  // const api_key = 'dc6zaTOxFJmzC';
  // const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;

  // const url = `https://cat-fact.herokuapp.com/facts`

  handleSubmit = (event) => {
    event.preventDefault();

    const api_key = 'ee041990-3572-4441-a138-65b21f60b6f5';
    const url = `https://api.thecatapi.com/v1/images/search?${this.state.term}&api_key=${api_key}`;

      fetch(url)
        .then(response => response.json())

        .then(data => this.setState({term:'', img: data[0].url}))
        

        .catch(e => console.log('error', e));
      
      
    axios.get(`https://api.chucknorris.io/jokes/random`)
    .then(res => {
      const jokes = res.data.value;
      this.setState({ jokes: jokes });
      console.log(jokes);
    })
      }



      render() {
        return (
          
          <div className="App">

        <header className="App-header">

          <h1 className="title">*HaCkAtHon</h1>
     
        </header>

      <form>
          {/* <input value={this.state.term} onChange={this.onChange} /> */}

          <button onClick={this.handleSubmit}>refresh</button>
      </form>

          <img src={this.state.img} height = "700" alt={this.state.img} />


<p>

  <li>{this.state.jokes}</li>

</p>


         
      </div>
   
   );

  }
}
export default App;