import React, { Component } from 'react';

// This component should display a div with a background color, width and height based on the props passed to it
class Box extends Component {
  render() {
    return (
      <div className="Box" style={{width: `${this.props.width}px`, height: `${this.props.height}px`, backgroundColor: `${this.props.backgroundColor}`}}></div>
    );
  }
}

export default Box;
