import * as action from '../../action'

export function fetchData(){
    return dispatch => {
        dispatch(action.fetchBegin());
        return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(response => {
            console.log(response);
            dispatch(action.fetchSuccess(response))
            return response
        }).catch(e => {
            dispatch(action.fetchError(e));
            return e
        })
    }
}
