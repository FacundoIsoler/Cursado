import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

/*
Primer paso del mundo REDUX --> 
Necesitamos crear el store con createStore importado de redux.
Para poder trabajar con las consultas a la api necesitamos un middleware que se encargue de asincronia, y por eso utilizamos el Thunk. Esto hace que las actionCreators devuelvan una function y una vez que la api haya dado respuesta hacer el dispatch correspondiente de la accion.

El window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ o DevTools nos permite activar el react redux dev tools en el navegador, que es clave para poder saber que valores hay alojados en el store, que valores recibe cada accion y fundamentalmente, que accion fue dispatchada

*/