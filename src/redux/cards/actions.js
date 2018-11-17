import {callNapi} from "../../system/system";

// ---------------------------------------------------------------------------------
export const getCards = (index, limit) => dispatch => {
    dispatch({
      type: "SET_CARDS_PAGINATION_INDEX",
      index
    });
    callNapi('vocab','get',{ index, limit })
      .then( result => {
        if(!result.data) return null;
        console.log(result.data.data);
        const { cards, ncards } = result.data.data;
        dispatch({
          type: "SET_CARDS",
          cards, ncards
        });
      })
};