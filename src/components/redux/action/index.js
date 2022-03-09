//Add Item to Cart

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product
  }
}

//Delete from Cart
export const deleteFromCart = (product) =>{
    return {
        type: "DELETE_FROM_CART",
        payload: product
    }
}