//Create ActionCreator functions here
import * as types from "./actionTypes";


const getShoesRequest=()=>{
    return {type: types.GET_SHOES_REQUEST}
}
const getShoesSuccess=(payload)=>{
    return {type: types.GET_SHOES_SUCCESS,payload}
}
const getShoesFailure=()=>{
    return {type: types.GET_SHOES_FAILURE}
}

const shoeCountRequest = ()=>{
    return {type: types.UPDATE_SHOE_COUNT_REQUEST}
}

const shoeCountSuccess = ()=>{
    return {type: types.UPDATE_SHOE_COUNT_SUCCESS}
}
const shoeCountFailure=()=>{
    return {type: types.UPDATE_SHOE_COUNT_FAILURE}
    
}

export {getShoesFailure,getShoesRequest,getShoesSuccess}