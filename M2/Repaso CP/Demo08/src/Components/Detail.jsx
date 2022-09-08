import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getProductsById, clearDetail} from '../Redux/actions'
import {useParams} from 'react-router-dom'


function Detail() {

  let params = useParams() // this.props.match.params

  let dispatch = useDispatch()

  /*
  Reemplaza: 

mapDispatchToProps (dispatch) {
  return {
    getProductById: id => dispatch(getProductById(id))
  }
}
*/


  let detail = useSelector(state => state.productDetail)

  /*
mapStateToProps (state) {
  return {
    detail: state.productDetail
  }
}
*/

  let loading = useSelector (state => state.loading)

  React.useEffect(() => {
    dispatch(getProductsById(params.id))
    dispatch(clearDetail())
  }, [])

      /*Como la dependencia es vacia, se va a ejecutar una unica vez, simula un componentDidMount de un componente de clase.
    Lo que hace en este caso es ir a buscar a una api, un "producto" con el id pasado. 
     El valor del id lo tomamos a traves de useParamas o props.params.match.id*/


  return (
    <div>
      {loading? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="Cargando.."/> : <div> 
        <h3> Nombre: {detail.title} </h3>
        <img src={detail.url}/>        
        </div>}
    </div>
  )
}
/*OJO ACA --> Nosotros estamos pasando info falsa al detail, porque solo trabajamos con los de la API. 
Si quisieran usar ambos (locales y de la API) deberian hacer logica de comprobacion!!! */

export default Detail