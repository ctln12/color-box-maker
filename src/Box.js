import React, { Component } from 'react';

// This component should display a div with a background color, width and height based on the props passed to it
class Box extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let box = { width: this.props.width, height: this.props.height, backgroundColor: this.props.backgroundColor, id: this.props.id };
    this.props.deleteBox(box);
  }
  render() {
    return (
      <div className="Box" style={{width: `${this.props.width}px`, height: `${this.props.height}px`, backgroundColor: `${this.props.backgroundColor}`}}>
        <button onClick={this.handleClick}>x</button>
      </div>
    );
  }
}

export default Box;
