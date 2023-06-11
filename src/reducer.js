export const initialState = {
  basket: [],
  user: null,
};

// Selector

const reducer = (state, action) => {
  console.log(action);



  switch (action.type) {
    
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };


    case "REMOVE_FROM_BASKET":

      // checks whether the product exists in the basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // clone the basket
      let newBasket = [...state.basket];


      if (index >= 0) {
        // the item exists in the basket, Remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

      // user login 
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
