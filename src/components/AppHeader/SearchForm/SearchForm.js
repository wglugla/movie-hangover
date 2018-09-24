import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <button onClick={this.handleSearch}>
          Search
        </button>
    </form>
    );
  }

  handleSearchChange = e => {
    console.log('input');
    this.setState ({ 
      search: e.currentTarget.value 
    })
  };  

  handleSearch = e => {
    console.log('search');
    e.preventDefault();
    this.props.changePhraseAndFetch(this.state.search);
  };
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    phrase: state.phrase
  };
};

const mapDispatchToProps = { changePhraseAndFetch };

export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)