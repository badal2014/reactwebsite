import * as constant from './constant';

export const fetchBegin = () => ({
    type: constant.FETCH_START
})

export const fetchSuccess = (data) => ({
    type: constant.FETCH_SUCCESS,
    payload: {data}
})

export const fetchError = (error) => ({
    type: constant.FETCH_ERROR,
    payload: {error}
})

export const matchMovieBegin = () => ({
    type: constant.MOVIE_START
})

export const matchMovieSuccess = (data) => ({
    type: constant.MOVIE_SUCCESS,
    payload: {data}
})

export const matchMovieError = (error) => ({
    type: constant.MOVIE_ERROR,
    payload: {error}
})