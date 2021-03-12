import {GET_DATA,LOGIN,LOG_OUT} from '../constants'
import axios from 'axios'




export function getData(id) {

    
    return async function (dispatch) {
        return axios({
            method: "GET",
            url: 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json',
        })
            .then(response => {

                const data={gold:0,silver:0,bronze:0}
                data.info = response.data
                response.data.map(atleta => {
                    data.gold = data.gold + parseInt(atleta.gold);
                    data.silver = data.silver + parseInt(atleta.silver)
                    data.bronze = data.bronze + parseInt(atleta.bronze)
                })

                return dispatch({
                    type: GET_DATA,
                    payload: data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export function login(data){
    return {
        type:LOGIN,
        payload:data
    }
}

export function LogOut(){
    return {
        type:LOG_OUT
    }
}