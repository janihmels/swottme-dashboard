/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';


// --------------------------------------------------------------
// --------------------------------------------------------------
export default class Pagination extends Component {

  // --------------------------------------------------------------
  setIndex = (index) => {
    this.props.setIndex(index);
  }

  // --------------------------------------------------------------
  render() {
    const { nitems, index, limit } = this.props;

    const npages = Math.ceil(parseInt(nitems)/parseInt(limit));
    let pages=[];
    const start = Math.max(parseInt(index) - 5,0);

    for(let i=0;i<Math.min(npages, 10);i++) {
      pages[i]=(start+i);
    }
    if(!npages) pages[0]=0;

    const noNext = {}, noPrevious = {};
    if(index===(npages-1)) noNext['disabled']='disabled';
    if(index===0) noPrevious['disabled']='disabled';


    return (
      <nav className="pagination" role="navigation" aria-label="pagination">
        <a 
          className="pagination-previous" 
          title="First Page" {...noPrevious}
          onClick={ () => this.setIndex(index-1) }
        >
          Previous
        </a>
        <a 
          className="pagination-next" 
          {...noNext}
          onClick={ () => this.setIndex(index+1) }
        >
          Next page
        </a>

        <ul className="pagination-list">
          {
            pages.map(
              (thispage, pageindex) => {
                const isCurrent = thispage===index ? 'is-current': '';
                return (
                  <li key={`pagination-${pageindex}`}>
                    <a
                      className={`pagination-link ${isCurrent}`} 
                      aria-label="Page" 
                      aria-current="page"
                      onClick={ () => this.setIndex(thispage) }
                    >
                      {thispage}
                    </a>
                  </li>      
                )
              }
            )
          }
        </ul>
      </nav>
    )
  }
}