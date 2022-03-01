import React, { Component } from 'react'

class FormSearch extends Component {
  render = () => <input className="form-search" type="text" onChange={this.handleChange} />

  handleChange = (evt) => {
    const giphy = require('giphy-api')('FU9uuAEzHLiEQ5rTO5Dam2mINJ9EhVVL');
    giphy.search({ q: evt.target.value, limit: 10 }, this.props.changeHandler)
  }
}

export default FormSearch
