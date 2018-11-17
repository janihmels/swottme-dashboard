import {callNapi} from "../../system/system";

// ---------------------------------------------------------------------------------
export const getUsers = (index, limit) => dispatch => {
    dispatch({
      type: "SET_USERS_PAGINATION_INDEX",
      index
    });
    callNapi('users','get',{ index, limit })
      .then( result => {
        if(!result.data) return null;
        const { users, nusers } = result.data.data;
        dispatch({
          type: "SET_USERS",
          users, nusers
        });
      })
};
