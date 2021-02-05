import listaProdutos from "./listaProdutos";

const initialState = listaProdutos.map((item) => ({ ...item, qty: 0 }));

export default (state = initialState, action) => {
  switch (action.type) {
    case 'Adicionar ao carrinho':
     
      return state.map((item) =>{
        item.id === action.id && item.qty++;
        return item;
      });


    case "Remover do Carrinho":
      return state.map((item) =>{
        item.id === action.id && item.qty--;
        return item;
      });



    case "Limpar o carrinho":
      return state.map((item) =>{
        item.qty=0;
        return item;
      });



    default:
      return state;
  }
};
