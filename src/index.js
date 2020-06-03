import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './Components/ProductTable.js'
let products = [
      {
        name :'Product 1', 
        category : 'Electronics', 
        price : 128.600,
      },
      {
        name : 'Product 2', 
        category : 'Clothes', 
        price : 253.900,
      },
      {
        name : 'Product 3', 
        category : 'Electronics', 
        price : 928.200,
      },
  ];



ReactDOM.render(
  <React.StrictMode>
    <ProductTable productList= {products} />
  </React.StrictMode>,
  document.getElementById('root')
);



