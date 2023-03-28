import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';


export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getGifs = (searchTerm) => {
    return( dispatch => {
        dispatch(fetchStart());
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=xjxVcDDyAWbBm3yUYGowh4yXyosZ80PP&q=${searchTerm}`)
            .then(res =>{
                console.log(res);
                dispatch(fetchSuccess(res.data.data));
            })
            .catch(err => {
                console.err(err);
            })
        })
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = gifs => {
    return({type: FETCH_SUCCESS, payload: gifs});
}