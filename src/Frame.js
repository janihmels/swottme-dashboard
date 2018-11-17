/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// --------------------------------------------------------------
import dragonlogosmall from "./media/dragonlogosmall.png";

// --------------------------------------------------------------
// --------------------------------------------------------------
class Frame extends Component {

  
  
  
  // --------------------------------------------------------------
  navigateHome = () => {
    this.props.history.push('/users');
  }
  // --------------------------------------------------------------
  navigateCards = () => {
    this.props.history.push('/cards');
  }
  // --------------------------------------------------------------
  render() {

    const thisId = this.props.history.location.pathname;
    const isCards = thisId.substr(0,6) === '/cards';

    return (      
      <div style={{padding: 8}}>

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src={dragonlogosmall} />
            </a>
            <div className="navbar-start">
                <a 
                    className={`navbar-item ${isCards ? '': 'is-tab is-active'}`}
                    onClick={this.navigateHome}
                >
                    Users
                </a>
                <a 
                    className={`navbar-item ${isCards ? 'is-tab is-active': ''}`}
                    onClick={this.navigateCards}
                >
                    Video Cards
                </a>
            </div>
          </div>
        </nav>

        {this.props.children}

        <footer className="footer">
          <div className="content has-text-centered">
          &copy; Swott.Me 2018
          </div>
        </footer>

      </div>
    );
  }

}




// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ },dispatch);
  }
  function mapStateToProps(state) {
    return {
    };
  }
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Frame));