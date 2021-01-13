import React, { Component } from 'react';

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
    this.setState({ [evt.target.name]: evt.target.value })
  }
  handleSubmit(evt){
    evt.preventDefault();
    // create new box
    this.props.addBox(this.state);
    this.setState({ width: "", height: "", backgroundColor: "" });
  }
  render() {
    return (
      <div className="NewBoxForm">
        <h2>Add a new color box</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width (pixels)</label><br />
          <input
            id="width" name="width" type="text" placeholder="50"
            value={this.state.width}
            onChange={this.handleChange} /><br />
          <label htmlFor="height">Height (pixels)</label><br />
          <input
            id="height" name="height" type="text" placeholder="60"
            value={this.state.height}
            onChange={this.handleChange} /><br />
          <label htmlFor="backgroundColor">Background Color</label><br />
          <input
            id="backgroundColor" name="backgroundColor" type="text" placeholder="purple"
            value={this.state.backgroundColor}
            onChange={this.handleChange} /><br />
          <button>Add box</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
