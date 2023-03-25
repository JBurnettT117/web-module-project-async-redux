import data from "../gifs"; 

import { FETCH_START } from "../actions";
import { fetchStart } from "../actions";

const initialState = {
    gifs: data,
    loading: false,
    error:""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading:true,
                error:""
            }
        default:
            return(state);
    }
}

export default reducer;