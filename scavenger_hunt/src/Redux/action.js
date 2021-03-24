import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, HANDLE_LOGOUT, SAVE_LOGGED_DATA, SEARCH_PINCODE_FAILURE, SEARCH_PINCODE_REQUEST, SEARCH_PINCODE_SUCCESS, SEND_ALERT } from "./actionTypes";
import axios from "axios"

export const getDataRequest=()=>({
    type:GET_DATA_REQUEST
})
export const getDataSuccess=(payload)=>({
    type:GET_DATA_SUCCESS,
    payload
})
export const getDataFailure=()=>({
    type:GET_DATA_FAILURE
})

export const getData=()=>dispatch=>{
    dispatch(getDataRequest())
    axios({
        method:"GET",
        url:"https://scavenger-proj.herokuapp.com/data"
    })
    .then(res=>dispatch(getDataSuccess(res.data)))
    .catch(()=>dispatch(getDataFailure()))
}

export const saveLoggedData=(payload)=>({
    type:SAVE_LOGGED_DATA,
    payload
})

export const searchPincodeRequest=()=>({
    type:SEARCH_PINCODE_REQUEST
})
export const searchPincodeSuccess=(payload)=>({
    type:SEARCH_PINCODE_SUCCESS,
    payload
})
export const searchPincodeFailure=()=>({
    type:SEARCH_PINCODE_FAILURE
})

export const searchPincode=(payload)=>dispatch=>{
    dispatch(searchPincodeRequest())
    axios({
        method:"GET",
        url:`https://scavenger-proj.herokuapp.com/data?q=${payload}`
    })
    .then(res=>dispatch(searchPincodeSuccess({data:res.data,pincode:payload})))
    .catch(()=>dispatch(searchPincodeFailure()))
}

export const sendAlert=()=>({
    type:SEND_ALERT
})

export const handleLoggedOut=()=>({
    type:HANDLE_LOGOUT
})