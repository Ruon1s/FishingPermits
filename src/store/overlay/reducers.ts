import {OverlayActionTypes, overlayTypes, TOGGLE_HIDDEN} from "./types";

const initialState: overlayTypes = {
    hidden: true
};

const reducer = (state = initialState, action: OverlayActionTypes) => {
  switch (action.type) {
      case TOGGLE_HIDDEN:
          return {
              ...state,
              hidden: action.payload
          };
      default:
          return state;
  }
};
export default reducer;
