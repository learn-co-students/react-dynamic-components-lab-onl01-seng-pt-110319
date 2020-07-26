import React, { Component } from 'react';

class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity < 0.2 ? null : <ColorBox opacity={this.props.opacity - 0.1} /> }
      </div>
    )
  }

}

export default ColorBox

