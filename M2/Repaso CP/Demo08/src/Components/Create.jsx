import React, { useDebugValue } from "react";
import { addProduct } from "../Redux/actions";
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Create({add}) {
  const initialState = {
    name: "",
    price: 0,
    location: "",
    seller: "",
  };

  let [input, setInput] = React.useState(initialState);

  let history = useHistory()

  let handleOnChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let handleOnSubmit = (e) => {
    e.preventDefault();
    add(input)
    setInput(initialState)
    history.push('/local')
  }

  return (
    <div>
      <h1>CREATE NEW PRODUCT </h1>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <div>
          <label> NAME: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label> PRICE: </label>
          <input
            type="number"
            name="price"
            value={input.price}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label> SELLER: </label>
          <input
            type="text"
            name="seller"
            value={input.seller}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label> LOCATION: </label>
          <input
            type="text"
            name="location"
            value={input.location}
            onChange={handleOnChange}
          />
        </div>
        <input type='submit' value="CREATE" disabled={!input.name? true : false}/>
      </form>
    </div>
  );
}

function mapDispatchToProps (dispatch){
  return{
    add: input => dispatch(addProduct(input))
  }
}
export default connect(null, mapDispatchToProps)(Create);

    /*
    CODIGO EN FORMULARIOS 

  Creamos un estado local que se  encargue de alojar la informacion de los inputs definidos dentro del form, la idea es que estos valores, a medida que la inforamcion en el input cambie, tambien cambien --> control onChange. 
  De esta forma cuando ejecutemos el submit se enviar, en un futuro al back, ahora, a nuestro store. 

  El hook de useState sirve solo para componentes de funcion, en el caso de querer tener un estado local en un componente de clase debo invocar a la funcion constructora, y por lo tanto a su super, y luego utilizar setState. 
  El hook useState nos devuelve un arreglo en donde en la primera posicion se aloja el valor del estado y en la segunda una funcion que nos permite modificar el estado.
    
  Ademas, useState, recibe por parametro el valor inicial que le queremos dar a nuestro estado (que puede tener la estructura que querramos... un string, un string vacio, un array, un objeto con propiedades, etc, etc).  

  ON CHANGE
  Esta funcion se invocara, en cada instancia en donde un input cambie, esto se debe a que en cada input definimos un evento onChange que invoca a handleChange. Lo que hace dicha funcion es tomar la propiedad name del input (distinta de la del estado local) y se le reasigna a la propiedad (del estado) el valor que se aloje en el input.
  Por lo tanto, si el input tiene una propiedad name='name', y el valor alojado en el mismo es 'Jueguera', lo que va a hacer el setInput es establecerlo, modificando solo esa propiedad
  Estado inicial:
    {
    name: '',
  price: 0,
  location: '',
   } 
 Estado luego del onChange
  {
    name: 'Juguera',
  price: 0,
  location: '',
   } 

Y asi en cada una de las propiedades.

ON SUBMIT
Cuando se haga click en el boton de submit se submitea (envia) el form completo.
Si quisiera puedo usar un boton comun para realizar el mismo compoartamiento con un evento del tipo onClick. 
Es buena practica al trabajar con un form, utilizar el evento onSubmit.
Como el comportamiento del onSubmit es refrescar la pagina, invocamos e.preventDefault para evitarlo.
Luego, despachamos una accion que previamente habiamos conectado a nuestro componente a traves del useDispatch o de la funcion connect  definiendo la funcion mapDispatchToProps y determinando que nombre le queremos dar a nuestra propiedad encargada de despachar la accion. 
Esa accion es la que en este caso, se llama add (ver mapDispatchToProps), y trajimos por destructuring. Gracias a todo esto, para utilizarlo luego simplemente la invocamos.

En este caso no necesitamos ningun estado del store, por lo cual no necesito hacer mapStateToProps. 
*/
