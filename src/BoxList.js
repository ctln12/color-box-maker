import React, { Component } from 'react';

// Place your state that contains all of the boxes here.
// This component should render all of the Box components along with the NewBoxForm component
class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = { width: "", height: "", backgroundColor: "" }
  }
  render() {
    return (
      <div>
        <p>Box List Component</p>
      </div>
    );
  }
}

export default BoxList;
