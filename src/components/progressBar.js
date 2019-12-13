import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themeContext'

class progressBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>{(context) => {
        const { isProgressBar, yearOne, yearTwo } = context
        const progress = isProgressBar ? yearOne : yearTwo
        return (
          <div className="progressBar" style={{ background: progress.bg, width: progress.width }}>
            hi  
          </div>
        )
      }}
      </ThemeContext.Consumer>
    );
  }
}

export default progressBar;