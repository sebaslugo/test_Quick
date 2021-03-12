import { combineReducers } from 'redux';
import {GET_DATA,LOGIN,LOG_OUT} from '../constants'

const initialState = {
    data:[],
    gold:{},
    silver:{},
    bronze:{},
    user:{},
    users:[
        {
            email:'coordinador@test.com',
            role:'Coordinador',
            password:'test123',
            name:'Andres Lugo'
        },
        {
            email:'administrador@test.com',
            role:'Administrador',
            password:'test123',
            name:'Sebastian Lugo'
        }
    ],
    loading:false

}
const data = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state, 
                data: action.payload.info,
                gold:{
                    total: action.payload.gold,
                    message:'Medallas de oro adquiridas en los ultimos años'
                },
                silver:{
                    total:action.payload.silver,
                    message:'Medallas de plata adquiridas en los ultimos años'    
                },
                bronze:{
                    total:action.payload.bronze,
                    message:'Medallas de bronce adquiridas en los ultimos años'
                }
            }
        case LOGIN:
            return {
                ...state,
                user: state.users.find(user => user.email === action.payload.email && user.password === action.payload.password),
                loading:true
            }
        case LOG_OUT:
            return {
                ...state,
                user:{},
                loading:false
            }
        default:
            return {
                ...state,
            };
    }
}


const rootReducer = combineReducers({
  data,
});

export default rootReducer;