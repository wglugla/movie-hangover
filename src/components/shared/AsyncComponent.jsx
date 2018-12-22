import React, { Component } from 'react';

export class AsyncComponent extends Component {
  state = {
    Component: null,
    isLoading: false
  };

  componentDidMount() {
    if (!this.state.Component && !this.state.isLoading) {
      this.setState(
        {
          isLoading: true
        },
        this.loadComponent
      );
    }
  }

  loadComponent = () => {
    return this.props.componentProvider().then(Component => {
      this.setState({
        Component,
        isLoading: false
      });
    });
  };
  render() {
    const { Component } = this.state;
    return Component ? <Component {...this.props.componentProps} /> : null;
  }
}

export default AsyncComponent;
