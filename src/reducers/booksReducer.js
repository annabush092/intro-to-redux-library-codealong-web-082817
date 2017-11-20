export function booksReducer(state=[], action) {
  switch (action.type) {

    case "ADD_BOOK":
        return state.concat(action.book);

      case "REMOVE_BOOK":
        const idx = state.indexOf(action.id);
        return [ ...state.slice(0, idx), ...state.slice(idx + 1) ];

      default:
        return state;

    }
};
