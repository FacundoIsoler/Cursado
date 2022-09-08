/* Si function X necesita tener codigo asincrono se activa el thunk
 y en lugar de retornar un objeto hace un return function que recibe el (dispatch) ---> hace el llamado a la API (fetch, axios)
 .then cuando tengo la respuesta --> ahora si hace el dispatch del objeto
 return {
     type
     payload (respuesta de la API)
 }
 .catch

 ACTION CREATORS:
 Son funciones creadoras de acciones, que importaremos desde nuestros componentes para hacer el dispatch de las acciones.

 Las ACTION son objetos que tienen una propiedad obligatoria TYPE que indica que accion se debera ejecutar en el reducer. 
 Adicionalmente, puede contenter otra propiedad que lleve informacion extra hacia el reducer. Por convencion lo llamamos PAYLOAD.

 Como los reducer solo ejecutan funciones puras, no podemos realizar codigo asincrono (por ej, consultas a la API).
 Por eso utilizamos el thunk-middleware (lo declaramos en el store, se ejecuta al dispatchar la accion).
 El action creator, en lugar de retornar un objeto accion, retorna una funcion que recibe el dispatch, luego invoca a la api
 y finalmente al tener la info retorna un dispatch con la informacion obtenida, y obligadamente el type.
Es ese dispatch el que viaja hacia el reducer, ya con la informacion.

 */

import {ADD_PRODUCT, GET_PRODUCTS} from './actionTypes'

export function addProduct (payload) {
    // ---> esto mandalo al back
    return {
        type: ADD_PRODUCT,
        payload
    }
}

export function loading (){
    return {
        type: "LOADING"
    }
}
export function getProducts () {
    return function (dispatch){
        dispatch(loading())
        return fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res
            })
        })
    }
}

export function deleteProduct (id) {
return {
    type: "DELETE",
    payload: id
}
}

export function getProductsById (productId) {
    // if (productId < 5000)
    return function (dispatch){
        dispatch(loading())
        return fetch(`https://jsonplaceholder.typicode.com/photos/${productId}`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "GET_PRODUCTS_BY_ID",
                payload: res
            })
        })
    }
}

/*
Opcional de manejo de datos segun lo que hablamos del detail:

export function getById(productId) {
if (productId < 5000) {
    return function (dispatch){
        dispatch(loading())
        return fetch(`https://jsonplaceholder.typicode.com/photos/${productId}`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: GET_BY_ID,
                payload: res
            })
        })
    } 
} else {
    return {
       type: "SIN DESCRIPCION"
    }
}
}




*/

export function clearDetail () {
    return{
        type: "CLEAR"
    }
}