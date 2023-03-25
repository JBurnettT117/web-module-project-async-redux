export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    console.log("here");
    return({type: FETCH_START});
}