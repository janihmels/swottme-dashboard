// --------------------------------------------------------------
// --------------------------------------------------------------
const initialState = {
  users: [],
  nusers: 0,
  index: 0,
  limit: 3
};

// --------------------------------------------------------------
// --------------------------------------------------------------
export default function( state = initialState, action ) {

  switch(action.type) {

    // --------------------------------------------------------------
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
        nusers: action.nusers
      }
      break;
    // --------------------------------------------------------------
    case "SET_USERS_PAGINATION_INDEX":
      return {
        ...state,
        index: action.index
      }
      break;

    // --------------------------------------------------------------
    default:
      return state;
  }
};
