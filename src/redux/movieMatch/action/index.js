import * as action from '../../action'

export function matchMovie(){
    return dispatch => {
        dispatch(action.matchMovieBegin());
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(response => {
            console.log(response);
            dispatch(action.matchMovieSuccess(response))
            return response
        }).catch(e => {
            dispatch(action.matchMovieError(e));
            return e
        })
    }
}