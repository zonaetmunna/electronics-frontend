import { addProduct } from "../../actions/productAction";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch('http://localhost:5000/api/products/', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'content-type': 'application.json',
      }
    })
    const data = await res.json();
    
    if (data.acknowledged) {
      dispatch(addProduct({
        _id: data.insertedId,
        ...product,
      }));
    }

  }
  
};

export default addProductData;