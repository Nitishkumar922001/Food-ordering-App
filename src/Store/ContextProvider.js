import { useReducer } from "react";
import CartCxt from "./CartCxt";

function cartReducer(state, action) {
  if (action.type === "Add") {
    const ItemIndex = state.items.findIndex(
      (item) => item.id === action.items.id
    );
    let amount = state.totalAmount + action.items.amount * action.items.price;



    if (state.items[ItemIndex]) {
      let updateItems = state.items[ItemIndex];
      updateItems.amount = (+updateItems.amount + 1).toString();
      state.items[ItemIndex] = updateItems;

      return { items: [...state.items], totalAmount: amount };
    } else {
      return { items: [...state.items, action.items], totalAmount: amount };
    }
  }

  if (action.type === "Remove") {
    const ItemIndexIfExists = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    let currentItem = state.items[ItemIndexIfExists];

    let totalAmount = state.totalAmount;
    totalAmount -= currentItem.price;

    let updatedItems;
    if (+currentItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
     
      updatedItems = [...state.items];
      updatedItems[ItemIndexIfExists].amount -=1 ;
      updatedItems[ItemIndexIfExists].amount.toString();
    }
    return {
      items: updatedItems,
      totalAmount: totalAmount,
    };
  }
}

function ContextProviders(props) {
  const [cartState, CartDF] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  function addItem(item) {
    CartDF({ type: "Add", items: item });
    return;
  }
  function removeItem(id) {
    CartDF({ type: "Remove", id: id });
    return;
  }

  return (
    <CartCxt.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {props.children}
    </CartCxt.Provider>
  );
}
export default ContextProviders;
