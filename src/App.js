import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter,Route } from 'react-router-dom';
import Pages from './components/Pages';
import Home from './components/HomePage';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar/>
        <Route exact path="/" component={ Home }/>
        <Route path="/v0/:pages" component={ Pages }/>
      </div>
    </BrowserRouter>
  );
}
}


export default App;
