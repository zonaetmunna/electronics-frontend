import { deleteProduct } from "../../actions/productAction";

const deleteProductData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
    );
    const data = await res.json();
    console.log('delted success');

    if (data.acknowledged) {
      dispatch(deleteProduct(id));
    }
  }
};

export default deleteProductData;