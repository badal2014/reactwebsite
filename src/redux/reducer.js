import {combineReducers} from 'redux';
import fetch from './fetch/rheducer';
import movie from './movieMatch/reducer';

export default combineReducers({
    fetch,
    movie
});