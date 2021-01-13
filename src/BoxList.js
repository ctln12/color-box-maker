import React, { Component } from 'react';
import Box from './Box';

// Place your state that contains all of the boxes here.
// This component should render all of the Box components along with the NewBoxForm component
class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = { boxes: [] }
  }
  render() {
    return (
      <div className="BoxList">
        <p>Box List Component</p>
        <div>
          {this.state.boxes.map(box => <Box width={box.width} height={box.height} backgroundColor={box.backgroundColor} />)}
        </div>
      </div>
    );
  }
}

export default BoxList;
