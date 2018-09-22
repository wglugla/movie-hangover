import React, { Component } from 'react'

export class Movie extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <h2> {this.props.match.params.name} </h2>
        <p> Movie Desc </p>
      </div>
    ); 
  }
}