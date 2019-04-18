import * as constant from '../../constant';

let initialState = {
    movie: {
        data: [],
        error: false,
        success: false,
        loading: false,
        message: ""
    }
}

export default function movieReducer(state = initialState, action){
    console.log("in movie Reducer");
    
    switch(action.type){
        case constant.MOVIE_START:
            return{
                ...state,
                movie: {
                    data: [],
                    error: false,
                    success: false,
                    loading: true,
                    message: ""
                }
            }
        case constant.MOVIE_SUCCESS:
            return{
                ...state,
                movie: {
                    data: action.payload,
                    error: false,
                    success: true,
                    loading: false,
                    message: ""
                }
            }
        case constant.MOVIE_ERROR: 
            return{
                ...state,
                movie: {
                    data: [],
                    error: true,
                    success: false,
                    loading: false,
                    message: action.payload
                }
            }
        default: 
            return state;
    }
}