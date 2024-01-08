import React from 'react';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import MessageChanger from './components/MessageChanger';
import Counter from './components/Counter';
import EventHandlerBind from './components/EventHandlerBind';

class App extends Component {
  render() {
    return (
      /*
      <div className="App">
        <Greet name = "Rajas">
          <button>Click me </button>
        </Greet>
        <Greet name = "Ada" />
        <Welcome name = "Zinier"/>
        <Welcome name = "Sankey">
          <button>Dont click me </button>
        </Welcome>
        <MessageChanger />
      </div>
      
      <Counter /> */
      <EventHandlerBind /> 
      
    )
  }
}

export default App;
