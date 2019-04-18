import * as constant from '../../constant';

let initialState = {
    fetch: {
        data: [],
        error: false,
        success: false,
        loading: false,
        message: ""
    }
}

export default function dataReducer(state = initialState, action){
    console.log("in fetch reducer");
    
    switch(action.type){
        case constant.FETCH_START:
            return{
                ...state,
                fetch: {
                    data: [],
                    error: false,
                    success: false,
                    loading: true,
                    message: ""
                }
            }
        case constant.FETCH_SUCCESS:
            return{
                ...state,
                fetch: {
                    data: action.payload,
                    error: false,
                    success: true,
                    loading: false,
                    message: ""
                }
            }
        case constant.FETCH_ERROR: 
            return{
                ...state,
                fetch: {
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