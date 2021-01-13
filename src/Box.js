import React, { Component } from 'react';

// This component should display a div with a background color, width and height based on the props passed to it
class Box extends Component {
  render() {
    return (
      <div className="Box" style={{width: `${this.props.width}`, height: `${this.props.height}`, backgroundColor: `${this.props.backgroundColor}`}}></div>
    );
  }
}

export default Box;
