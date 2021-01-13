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
      { width: "215", height: "205", backgroundColor: "darkblue", id: uuidv4() }
    ] };
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }
  create(box){
    this.setState(state => ({
      boxes: [...state.boxes, box]
    }))
  }
  delete(id){
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        id={box.id}
        deleteBox={this.delete}
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
