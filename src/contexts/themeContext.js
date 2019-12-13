import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isProgressBar: true,
    yearOne: { bg: 'yellow', width: '60%', },
    yearTwo: { bg: 'green', width: '90%', }
  }
  toggleProgressBar = () => {
    this.setState({ isProgressBar: !this.state.isProgressBar });
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleProgressBar: this.toggleProgressBar }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;