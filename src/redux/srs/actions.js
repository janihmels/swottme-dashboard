import {callNapi} from "../../system/system";

// ---------------------------------------------------------------------------------
export const getSrsCards = learnerid => dispatch => {
    callNapi('vocab','getUserCards',{ learnerid })
      .then( result => {
        if(!result.data) return null;
        console.log(result.data.data);
        const { cards, servertime } = result.data.data;
        dispatch({
          type: "SET_SRS_CARDS",
          cards, servertime
        });
      })
};