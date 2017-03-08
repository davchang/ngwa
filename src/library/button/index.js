require('./scss/button.scss');
import React from 'react';

class Button extends React.Component {
  render() {
    console.log("--- in Button render ---");
    return (<button className="button">Click Me!</button>);
  }
}

export default Button;
