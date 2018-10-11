import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { changePhraseAndFetch } from '../../../actions';


export class SearchForm extends Component {
  state = {
    search: ''
  }
  render() {
    return (
      <form>
        <input
        type='text'
        placeholder='Input here ...'
        value={this.state.search}
        onChange={this.handleSearchChange}
        />
        <button onClick={this.handleSearch}> Search </button>
    </form>
    );
  }

  handleSearchChange = e => {
    this.setState ({ 
      search: e.currentTarget.value 
    })
  };  

  handleSearch = (e) => {
    e.preventDefault();
    this.props.changePhraseAndFetch(this.state.search);
    this.props.history.push('/');
  };
}

const mapStateToProps = (state) => {
  return {
    phrase: state.phrase
  };
};

const mapDispatchToProps = { changePhraseAndFetch };

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm));

