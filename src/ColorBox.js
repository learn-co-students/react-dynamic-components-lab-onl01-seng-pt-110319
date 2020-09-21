import React, { Component } from 'react';


class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {

    console.log(`wa ha prop ${this.props}`)
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
          {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
        
    )
  }
}
export default ColorBox







