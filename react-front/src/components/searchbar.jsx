import React from 'react';
import axios from 'axios';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarInput: '',
      filters: [],
      data: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchBarInput: event.target.value});
  }

  handleSubmit() {
    // axios({
    //   method: 'get',
    //   url: 'http://localhost:8080/api' + '/',
    //   headers: {}, 
    //   data: {
    //     filters: this.state.filters
    //   }
    // });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.searchBarInput} onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit} >Search</button>
      </div>
    )
  }
}