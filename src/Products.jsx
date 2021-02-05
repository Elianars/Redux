import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Produtos() {
  const dispatch = useDispatch();
  const produtos = useSelector((state) => state.produtos);
  // console.log(produtos);

  return (
    <div className="bg-info w-50">
      <h2>Produtos</h2>

      <div className="d-flex flex-wrap w-100 row ">
        {produtos.map((item) => (
          <div className="p-4 w-25 text-center shadow p-3 mx-3 mb-5 bg-white rounded" Key={item.id} >
            <p>{item.nome}</p>
            <p>R$: {item.preço}</p>
            <button className="btn btn-success"
              onClick={() =>
                dispatch({ type: 'Adicionar ao carrinho', id: item.id })
              }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// const panelStyele = {
//   padding: "10px",
//   height: "100vh",
//   width: "50vw",
//   background: "#ccff90 ",
// };

// const cardStyle = {
//   background: "#ff80ab  ",
//   width: "120px",
//   height: "100px",
//   fontWeight: "bold",
//   borderRadius: "15px",
//   margin: "5px",
//   padding: "15px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   alignContent: "center",
//   textAlign: "center",
// };

// const cardsDivStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "space-aroun",
// };
