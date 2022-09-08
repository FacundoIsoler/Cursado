import React from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../Redux/actions";
import { Link } from "react-router-dom";

export default function LocalProducts(props) {
  console.log(props);

  let dispatch = useDispatch();

  let local = useSelector((state) => state.localProducts);

  let handleClick = (e, id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <Link to="/local">
        <h3> Productos Propios </h3>
      </Link>
      {local.length === 0
        ? "Sin inventario"
        : local.map((el) => (
            <div>
              <Product key={el.id} id={el.id} name={el.name} price={el.price} />
              <button onClick={(e) => handleClick(e, el.id)}>DELETE</button>
              <br />
            </div>
          ))}
      <br />
    </div>
  );
}
