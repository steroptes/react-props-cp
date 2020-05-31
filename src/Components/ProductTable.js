import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';

function ProductTable(props) {
  return (
    <div
      className="productTable container mt-4 pb-4 pt-4"
      style={{ backgroundColor: "lightgray" }}
    >
      <h1 className="text-center">This is the table product</h1>
      <table className="table table-striped table-dark table-bordered table-hover striped bordered hover mt-4">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {props.productList.map((el, i) => (
            <tr key={i}>
              <td >{el.name}</td>
              <td >{el.category}</td>
              <td >{el.price.toFixed(3)} TND</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ProductTable.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default ProductTable;
