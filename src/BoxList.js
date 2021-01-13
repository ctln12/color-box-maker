import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from 'uuid';

// Place your state that contains all of the boxes here.
// This component should render all of the Box components along with the NewBoxForm component
class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = { boxes: [] };
    this.addBox = this.addBox.bind(this);
  }
  addBox(box){
    let newBox = { ...box, id: uuidv4() };
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }))
  }
  render() {
    return (
      <div className="BoxList">
        <NewBoxForm addBox={this.addBox} />
        <div>
          {this.state.boxes.map(box => <Box key={box.id} width={box.width} height={box.height} backgroundColor={box.backgroundColor} />)}
        </div>
      </div>
    );
  }
}

export default BoxList;
