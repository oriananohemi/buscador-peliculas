import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
        <div className="App">
        Search Movies
      </div>
    );
  }
}

export default App;
