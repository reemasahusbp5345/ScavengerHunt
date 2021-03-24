import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, HANDLE_LOGOUT, SAVE_LOGGED_DATA, SEARCH_PINCODE_FAILURE, SEARCH_PINCODE_REQUEST, SEARCH_PINCODE_SUCCESS } from "./actionTypes"

const initState = {
    loading: false,
    error: false,
    data: [],
    loggedUser: "",
    pincodeData: [],
    adminAlert:[],
    pincode:""
}

const reducer = (state = initState, { type, payload }) => {
    console.log(type, payload)
    switch (type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case SAVE_LOGGED_DATA:
            return {
                ...state,
                loggedUser: payload
            }
        case SEARCH_PINCODE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SEARCH_PINCODE_SUCCESS:
            payload.data.map(item=>item.alertBox.push(`${state.loggedUser} is looking for ${payload.pincode} pincode`));
            let arr=[]
            arr.push(`${state.loggedUser} is looking for ${payload.pincode} pincode`)
            return {
                ...state,
                loading: false,
                pincode:payload.pincode,
                pincodeData:payload.data,
                adminAlert:[...state.adminAlert,...arr]
            }
        case SEARCH_PINCODE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
     case HANDLE_LOGOUT:
         return{
             ...state,
             loggedUser:"",
             pincodeData:[]
         }
        default:
            return state
    }
}

export default reducer
