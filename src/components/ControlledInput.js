// Code ControlledInput Component Here
import React, {Component} from 'react'

class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  render(){
    return(
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}

export default ControlledInput;
