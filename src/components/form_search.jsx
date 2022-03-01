import React, { Component } from 'react';

const giphy = require('giphy-api')('FU9uuAEzHLiEQ5rTO5Dam2mINJ9EhVVL');

class FormSearch extends Component {
  render = () => <input className="form-search" type="text" onChange={this.handleChange} />

  handleChange = (evt) => {
    const { changeHandler } = this.props;
    giphy.search({ q: evt.target.value, limit: 10 }, changeHandler);
  }
}

export default FormSearch;
