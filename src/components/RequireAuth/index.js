import React, { Component } from 'react';
import {connect} from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shoudNavigateAway();
    }
  
    componentDidUpdate() {
      this.shoudNavigateAway();
    }
  
    shoudNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
      else {
        console.log("USER LOGGED IN");
      }
    }
    render() {
      return <ChildComponent/>
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }

  return connect(mapStateToProps)(ComposedComponent);
}

