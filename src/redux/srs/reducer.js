// --------------------------------------------------------------
// --------------------------------------------------------------
const initialState = {
  cards: [],
  servertime: null
};

// --------------------------------------------------------------
// --------------------------------------------------------------
export default function( state = initialState, action ) {

  switch(action.type) {

    // --------------------------------------------------------------
    case "SET_SRS_CARDS":
      return {
        ...state,
        cards: action.cards,
        servertime: action.servertime
      }
      break;

    // --------------------------------------------------------------
    default:
      return state;
  }
};
