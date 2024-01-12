import React from 'react';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import MessageChanger from './components/MessageChanger';
import Counter from './components/Counter';
import EventHandlerBind from './components/EventHandlerBind';
import ConditionRender from './components/ConditionRender';
import FragmentDemo from './components/FragmentDemo'
import GetDataDemo from './components/GetDataDemo';
import Hookcounter from './components/Hookcounter';
import HookObject from './components/HookObject';

class App extends Component {
  render() {
    return (      
      <HookObject />
    )
  }
}

export default App;
