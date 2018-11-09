import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "default"
  };

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  };

  state = {
    number: 0
  };

  render() {
    return (
      <div>
        <p>{this.props.name} Component</p>
        <p>{this.props.age}</p>
        <p>number: {this.state.number}</p>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1
            });
          }}
        >
          Plus
        </button>
      </div>
    );
  }
}

export default MyComponent;
