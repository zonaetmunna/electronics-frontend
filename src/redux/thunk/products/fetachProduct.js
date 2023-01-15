import { loadProduct } from "../../actions/productAction";

// load product
const loadProductsdata = () => {
  return async (dispatch, getState) => {
    const res = await fetch('http://localhost:5000/api/products/');
    const data = await res.json();
    console.log(data)

    if (data.length) {
      dispatch(loadProduct(data));
    };
  };
};

export default loadProductsdata;