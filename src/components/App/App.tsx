import React, { Component } from 'react';
import Block from '../../types/Block';

interface Props {
  block: Block;
}

class App extends Component<Props> {
  render() {
    return <div className="App">Let's make mandala art planner🕺🏻</div>;
  }
}

export default App;
