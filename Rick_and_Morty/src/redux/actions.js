
import { ADD_CHARACTER, DELETE_CHARACTER,FILTER,ORDER } from "./types"


export const addCharacter =  (id)   => ({
    type:ADD_CHARACTER,
    
    payload:id
})

export const deleteCharacter =  (id)   => ({
    type:DELETE_CHARACTER, 
    payload:id
})


export const filterCards = (status)  =>  ({
    type: FILTER,
    payload:status
})

export const orderCards = (id)  =>  ({

    type: ORDER,
    payload: id

})