import {ADD_PRODUCT, GET_PRODUCTS} from './actionTypes'

const initialState = {
    products : [],
    productDetail: {},
    localProduct: [],
    loading: false,
    description: false
}

let localId = 5001

export default function reducer (state = initialState, action) {
switch(action.type){
    case ADD_PRODUCT:
        return {
            ...state,
            localProduct: [...state.localProduct, {...action.payload, id: localId++}]
        }
    case GET_PRODUCTS:
        return {
            ...state,
            loading: false,
            products: action.payload
        }
    case "LOADING":
        return {
            ...state,
            loading: true
        }
    case "DELETE":
        return {
            ...state,
            products: state.products.filter(el => el.id !== action.payload),
            localProduct: state.localProduct.filter(el => el.id !== action.payload)
        }
    case "GET_PRODUCTS_BY_ID":
        return {
            ...state,
            loading: false,
            description: false,
            products: [action.payload],
            productDetail: action.payload
        }
    case "CLEAR":
        return{
            ...state,
            productDetail: {}
        }
        case "SIN DESCRIPCION":
            return {
                ...state,
                description: true
            }
    default:
        return state
}}

/*
REDUCER:

Definimos, por un lado, el estado inicial, indicando la estructura y los valores que queremos que tenga nuestro store por default.

Por otro lado, definimos el reducer en si mismo, la funcion que importara y utilizara createStore.

El reducer, recibe en como PRIMER parametro el state con un valor default (el que definimos en el primer paso). Y como SEGUNDO parametro recibe el action, que viene desde el dispatch.

Siempre tiene un return por default (generalmente el state actual, pero tambien puede ser un error). Se define como un else o como un default en el switch.

Cada action tienen una propiedad type, que es comparado con los posibles cambios que definimos en el reducer. Entonces, dependiendo del type del action sera lo que suceda dentro del estado. La accion solo es la descripcion (mas info extra de ser necesaria). 
Pero La logica -la modificacion del estado en si - la realiza el reducer. 

Cuando retorno el estado modificado no debo olvidar de hacer una copia del estado anterior (con el spread) y solo luego redefinir la propiedad puntual.

 */
