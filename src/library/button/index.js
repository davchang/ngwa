require('./scss/button.scss');
import React from 'react';

class Button extends React.Component {
  render() {
    console.log("--- in Button render ---");
    return (<button className="button"><span className="icon--new"></span> Click Me!</button>);
  }
}

export default Button;
