import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import Classes from './HeaderCartButton.module.css';
import CartCxt from "../../Store/CartCxt";
const HeaderCartButton=(props)=>{
const Cartcxt =useContext(CartCxt);
let amount=0;
if(Cartcxt.items.length>0)
{ amount=Cartcxt.items.reduce((totalamount,item)=>{
   return totalamount+=+item.amount;
},0)}
    return<>
        <button className={Classes.button} onClick={props.onClick}>
            <span className={Classes.icon}><CartIcon/></span>
            <span>your cart</span>
            <span className={Classes.badge}>{amount}</span>
        </button>
    </>
}
export default HeaderCartButton;