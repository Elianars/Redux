import {combineReducers} from  'redux';
import produtos from './produtosRedurcer'
import carrinho from './carrinhoReducer'

export default combineReducers({
    produtos,
    carrinho,
});  
