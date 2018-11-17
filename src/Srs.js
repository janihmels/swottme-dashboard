/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// --------------------------------------------------------------
import Frame from "./Frame";
import Pagination from "./Pagination";
// --------------------------------------------------------------
import { getSrsCards } from "./redux/srs/actions";
import "./srs.css";

const formatTS = timestamp => {
  return (new Date(timestamp)).toLocaleString();
}

// --------------------------------------------------------------
// --------------------------------------------------------------
class Srs extends Component {

  componentDidMount() {
    const { userid } = this.props.match.params;
    this.props.getSrsCards(userid);
  }


  render() {
    const { userid } = this.props.match.params;
    const { cards, servertime } = this.props.srs;

    return (
      <Frame>
        <section className="section">
          Time on Server: <b>{formatTS(servertime)}</b><hr />
          <div className="box">
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>  
              <tr>
                <th>Card ID</th>
                <th>English</th>
                <th>Chinese</th>
                <th>Repetitions</th>
                <th>E-Factor</th>
                <th>Last Display</th>
                <th>Next Display</th>
              </tr>
            </thead>
            <tbody>
              {
                cards.map(
                  (card, index) => {
                    return(
                      <Row 
                        card={card} 
                        key={`row-${index}`}
                        servertime={servertime}
                      />
                    )
                  }
                )
              }
            </tbody>
          </table>
          </div>
        </section>

      </Frame>

    );
  }
}


// --------------------------------------------------------------
// --------------------------------------------------------------
class Row extends Component {
  render() {
    const { card, servertime } = this.props;
    const needsReview = parseInt(servertime)>card.srs.nextDisplay;
    return(
      <tr>
        <td>{card._id}</td>
        <td>{card.english}</td>
        <td>{card.chinese}</td>
        <td>{card.srs.nReps}</td>
        <td>{Math.round(card.srs.eFactor*100)/100}</td>
        <td>{formatTS(card.srs.lastDisplay)}</td>
        <td
          className = {needsReview ? 'ripe' : ''}
        >{formatTS(card.srs.nextDisplay)}</td>
      </tr>
    )
  }
}

// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSrsCards },dispatch);
}
function mapStateToProps(state) {
  return {
    users: state.users,
    srs: state.srs
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Srs);