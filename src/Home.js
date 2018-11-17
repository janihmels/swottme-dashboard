/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';


// --------------------------------------------------------------
// --------------------------------------------------------------
export default class Home extends Component {

  componentDidMount() {
    this.props.history.push('/users');
  }

  render() {
    return null;
  }
}