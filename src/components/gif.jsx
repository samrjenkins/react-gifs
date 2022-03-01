import React, { Component } from 'react';

class Gif extends Component {
  render = () => <img className="gif" src={this.src()} onClick={this.props.clickHandler} data-gif-id={this.props.id} />

  src = () => `https://media.giphy.com/media/${this.props.id}/giphy.gif`
}

export default Gif;
