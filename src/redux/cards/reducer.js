// --------------------------------------------------------------
// --------------------------------------------------------------
const initialState = {
  cards: [],
  ncards: 0,
  index: 0,
  limit: 10
};

// --------------------------------------------------------------
// --------------------------------------------------------------
export default function( state = initialState, action ) {

  switch(action.type) {

    // --------------------------------------------------------------
    case "SET_CARDS":
      return {
        ...state,
        cards: action.cards,
        ncards: action.ncards
      }
      break;
    // --------------------------------------------------------------
    case "SET_CARDS_PAGINATION_INDEX":
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
