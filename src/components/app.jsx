import React, { Component } from 'react';
import FormSearch from './form_search';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedGifId: null, gifs: [] };
  }

  render = () => {
    return (
      <div>
        <div className="left-scene">
          <FormSearch changeHandler={this.handleFormSearchChange} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} gifClickHandler={this.handleGifClick} />
        </div>
      </div>
    );
  }

  handleGifClick = (evt) => {
    this.setState({ selectedGifId: evt.target.dataset.gifId });
  }

  handleFormSearchChange = (err, res) => {
    this.setState({ gifs: res.data });
  }
}

export default App;
