/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import "./splash.css";

export default class Splash extends Component {

    letsStart = () => {
        this.props.history.push('/users');
    }

    render() {
        const isReady = false;
        return (
        
        <div className="splash-container">
                
                <div className="start-here">
                    <div 
                        className="inner"
                        onClick={this.letsStart}
                    >
                        Dashboard 
                        <i 
                            style={{fontSize:33, marginLeft: 18}}
                            className="fa fa-chevron-right" 
                        />
                    </div>
                </div>

        </div>
        );
  }
}