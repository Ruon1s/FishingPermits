import {OverlayActionTypes, TOGGLE_HIDDEN} from "./types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {Action} from "redux";
import {useSelector} from "react-redux";


export const toggleHidden = () : ThunkAction<void, RootState, unknown, Action<String>> =>
    dispatch => {
    const state = useSelector((state: RootState) => state.hidden)
        let toState: Boolean;
        if(state.hidden){
             toState = false
        } else {
            toState = true
        }
       dispatch({type: TOGGLE_HIDDEN, payload: toState})
    };

