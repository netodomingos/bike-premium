import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from './Components/Context/Context'

ReactDOM.render(
    <ProductProvider>
        <App />
    </ProductProvider>,
document.getElementById('root'));


