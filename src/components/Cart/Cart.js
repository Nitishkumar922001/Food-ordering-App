import CartCxt from "../../Store/CartCxt";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
const Cartcxt = useContext(CartCxt);

function addHandler(item)
{
Cartcxt.addItem(item)
return;
}
function Removehandler(id)
{
  Cartcxt.removeItem(id)
return;
}

  
  
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {Cartcxt.items.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addHandler}
          onRemove={Removehandler}
        ></CartItem>
      ))}
    </ul>
  );
  
  
  let totalprice=Cartcxt.items.reduce((total,item)=>{
    return total+=item.price*item.amount;
  },0)
  totalprice=`${totalprice.toFixed(2)}`
  
  return (
    <Modal onClick={props.onClick}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalprice}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick} className={classes["button--alt"]}>
          close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
