/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// --------------------------------------------------------------
import Frame from "./Frame";
import Pagination from "./Pagination";
// --------------------------------------------------------------
import { getCards } from "./redux/cards/actions";
import "./css.css";
// --------------------------------------------------------------

// --------------------------------------------------------------
// --------------------------------------------------------------
class Cards extends Component {

  componentDidMount() {
    const { limit } = this.props.cards;
    const { page } = this.props.match.params;
    console.log("Page is", page);
    if(typeof(page)==='undefined') this.setIndex(0);
    this.props.getCards(page, limit);
  }

  setIndex = index => {
    const { limit } = this.props.cards;
    this.props.history.push(`/cards/${index}`);
    this.props.getCards(index, limit);
  }


  render() {
    const { ncards, cards, limit } = this.props.cards;
    const { page } = this.props.match.params;
    const index = parseInt(page);

    return (
      <Frame>
        <section className="section">
          <div className="box trans">

            <Pagination 
              nitems={ncards} 
              index={index}
              limit={limit}
              setIndex={this.setIndex}
            />

            {
              cards.length ? (
                <table 
                  className="table is-striped is-hoverable is-fullwidth"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Chinese</th>
                      <th>English</th>
                      <th>ID</th>
                      <th>Clip</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th colSpan='5'></th>
                    </tr>
                  </tfoot>
    
                  <tbody>
                    {
                      cards.map(
                        (card, count) => {
                          return(
                            <Row 
                              card={card} 
                              count={count+limit*index} 
                              key={`row-${count}`}
                            />
                          )
                        }
                      )
                    }
                  </tbody>
                </table>
              ) : (
                <div></div>
              )
            }

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
    const { card, count } = this.props;
    const ver = 999*Math.random();
    const uri = `https://storage.googleapis.com/swottme/Mp4s/${card.clip}?ver=${ver}`;

    return(
      <tr>
      <td>{count}</td>
      <td>{card.chinese}</td>
      <td>{card.english}</td>
      <td>{card._id}</td>
      <td><a href={uri} target="_blank">{card.clip}</a></td>
      </tr>
    )
  }
}

// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCards },dispatch);
}
function mapStateToProps(state) {
  return {
    cards: state.cards
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Cards);
