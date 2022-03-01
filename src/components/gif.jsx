import React, { Component } from 'react';

class Gif extends Component {
  render = () => {
    const { clickHandler, id } = this.props;
    return (
      <img className="gif" alt="" src={this.src()} onClick={clickHandler} data-gif-id={id} />
    );
  }

  src = () => {
    const { id } = this.props;
    return (
      `https://media.giphy.com/media/${id}/giphy.gif`
    );
  }
}

export default Gif;
