import React from 'react';
import ReactDOM from 'react-dom';

import Products from './Products';
import store from './redux/store'
import {Provider} from 'react-redux'
import Carrinho from './Carrinho';

console.log(store.getState ())

ReactDOM.render(

<Provider store ={store}>
    <div style={{display:'flex'}}>
        <Products/>
        <Carrinho/>
    </div>


</Provider>,


     document.getElementById('root')
     );





