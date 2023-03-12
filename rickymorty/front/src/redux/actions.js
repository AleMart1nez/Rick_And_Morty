
import { ADD_CHARACTER, DELETE_CHARACTER,FILTER,ORDER } from "./types"
import axios from "axios"


export function addCharacter(charac){
    return async function (dispatch){
        try {
            const result = await axios.post(`http://localhost:3001/rickandmorty/fav`, charac)
            return dispatch({
                        type: ADD_CHARACTER,
                        payload: result.data
                    })
        } catch (error) {
            console.log(error);
        }

    }
}

export function deleteCharacter(id){
    return async function(dispatch){
        try {
            const result = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            console.log(result);
            const dataDeleted = result.data;
                return dispatch({
                    type: DELETE_CHARACTER,
                    payload: dataDeleted
                })
        } catch (error) {
            console.log(error);
        }
    }
}


export function filterCards(status){
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id
    }
}
