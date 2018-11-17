/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// --------------------------------------------------------------
import Frame from "./Frame";
import Pagination from "./Pagination";
// --------------------------------------------------------------
import { getUsers } from "./redux/users/actions";





// --------------------------------------------------------------
// --------------------------------------------------------------
class Users extends Component {

  componentDidMount() {
    const { limit } = this.props.users;
    const { page } = this.props.match.params;
    if(typeof(page)==='undefined') this.setIndex(0);
    this.props.getUsers(page, limit);
  }

  setIndex = index => {
    const { limit } = this.props.users;
    this.props.history.push(`/users/${index}`);
    this.props.getUsers(index, limit);
  }

  render() {
    const { nusers, users, limit } = this.props.users;
    const { page } = this.props.match.params;
    const index = parseInt(page);

    return (
      <Frame>
        <section className="section">
          <div className="box">

            <Pagination 
              nitems={nusers} 
              index={index}
              limit={limit}
              setIndex={this.setIndex}
            />

            {
              users.length ? (
                <table 
                  className="table is-striped is-hoverable is-fullwidth"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>ID</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th colSpan='6'></th>
                    </tr>
                  </tfoot>
    
                  <tbody>
                    {
                      users.map(
                        (user, count) => {
                          return(
                            <Row 
                              user={user} 
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
    const { user, count } = this.props;
    return(
      <tr>
      <td>{count}</td>
      <td>{user.first}</td>
      <td>{user.last}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td><a href={`/srs/${user._id}`}>{user._id}</a></td>
      </tr>
    )
  }
}

// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUsers },dispatch);
}
function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Users);