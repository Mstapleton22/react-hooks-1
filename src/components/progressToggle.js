import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themeContext';

class ProgressToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleProgressBar } = this.context;
    return (<button onClick={toggleProgressBar}>Toggle the progress</button>);
  }
}

export default ProgressToggle;