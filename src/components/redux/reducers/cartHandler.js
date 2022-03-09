const cart = [];

const cartHandler = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADD_TO_CART":
      //Check if Product exists in cart
      const ifProductExist = state.find((x) => x.id === product.id);
      if (ifProductExist) {
        //Update quantity +1
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }
      break;

    case "DELETE_FROM_CART":
      const ifProductExist1 = state.find((x) => x.id === product.id);

      if (ifProductExist1.qty === 1) {
        return state.filter((x) => x.id !== ifProductExist1.id);
      } else {
        return state.map((x) => {
            return x.id===product.id? {...x,qty:x.qty-1} : x
        });
      }
      break;

    default:
      return state;
  }
};

export default cartHandler;
