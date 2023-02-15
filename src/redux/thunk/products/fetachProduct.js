import { loadProduct, loadSingleProduct } from "../../actions/productAction";

// load product
const loadProductsdata = () => {
  return async (dispatch, getState) => {
    const res = await fetch('https://electronics-backend-zonaetmunna.vercel.app/api/products/');
    const data = await res.json();
    console.log(data)

    if (data.length) {
      dispatch(loadProduct(data));
    };
  };
};

export const loadProductData = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/api/products/${_id}`);
    const data = await res.json();
    console.log(data);

    if (data) {
      dispatch(loadSingleProduct(data));
    }
  }
};

export default loadProductsdata;