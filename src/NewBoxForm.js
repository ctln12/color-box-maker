import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// This component should render a form that when submitted, creates a new Box.
// You should be able to specify the Box’s width, height, and background color.
// When the form is submitted, clear the input values.
class NewBoxForm extends Component {
  constructor(props){
    super(props);
    this.state = { width: "", height: "", backgroundColor: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt){
    evt.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.createBox(newBox);
    this.setState({ width: "", height: "", backgroundColor: "" });
  }
  render() {
    return (
      <div className="NewBoxForm">
        <h2>Add a new color box</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="width">Width (pixels)</label>
            <input
              type="text"
              name="width"
              value={this.state.width}
              onChange={this.handleChange}
              placeholder="e.g. 50"
              id="width"
            />
          </div>
          <div>
            <label htmlFor="height">Height (pixels)</label>
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
              placeholder="e.g. 60"
              id="height"
            />
          </div>
          <div>
            <label htmlFor="backgroundColor">Background Color</label>
            <input
              type="text"
              name="backgroundColor"
              value={this.state.backgroundColor}
              onChange={this.handleChange}
              placeholder="e.g. purple"
              id="backgroundColor"
            />
          </div>
          <button>Add box</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
