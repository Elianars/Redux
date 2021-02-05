import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Carrinho () {
  const dispatch = useDispatch();
  const carrinho = useSelector((state) => state.carrinho).filter((item) => {
  return item.qty>0 
  });
  console.log(carrinho)

  const quantidadeTotal = useSelector((state) =>
  state.carrinho.reduce((acc, cur) => acc + cur.qty, 0)
);

const valorTotal = useSelector((state) =>
  state.carrinho.reduce((acc, cur) => acc + cur.preço * cur.qty, 0)
);

 return (
    <div  className="mx-3">
      <h2>Carrinho - {quantidadeTotal} - {valorTotal} </h2>

      <table >
        <tbody>
          {carrinho.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>R$:{item.preço}</td>
              <td>R$:{item.preço * item.qty}</td>
              <td>
                

                <button className="mx-3"
                  onClick={() =>
                    dispatch({ type: "Adicionar ao carrinho", id: item.id })
                  }
                >
                  +
                </button>
                {item.qty}
                <button className="mx-3"
                  onClick={() =>
                    dispatch({ type: "Remover do Carrinho", id: item.id })
                  }
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

