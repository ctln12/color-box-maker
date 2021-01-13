import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from 'uuid';

// Place your state that contains all of the boxes here.
// This component should render all of the Box components along with the NewBoxForm component
class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = { boxes: [
      { width: "180", height: "190", backgroundColor: "purple", id: uuidv4() },
      { width: "190", height: "200", backgroundColor: "pink", id: uuidv4() },
      { width: "210", height: "220", backgroundColor: "violet", id: uuidv4() },
      { width: "215", height: "205", backgroundColor: "darkblue", id: uuidv4() }
    ] };
    this.create = this.create.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }
  create(box){
    let newBox = { ...box, id: uuidv4() };
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }))
  }
  deleteBox(boxToDelete){
    this.setState(state => ({
      boxes: state.boxes.filter(box => box.id !== boxToDelete.id)
    }));
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        id={box.id}
        deleteBox={this.deleteBox}
      />
    ));
    return (
      <div className="BoxList">
        <NewBoxForm createBox={this.create} />
        <div>{boxes}</div>
      </div>
    );
  }
}

export default BoxList;
