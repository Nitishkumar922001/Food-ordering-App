import CartIcon from "../Cart/CartIcon";
import Classes from './HeaderCartButton.module.css';
const HeaderCartButton=(props)=>{

    return<>
        <button className={Classes.button}onClick={props.onClick}>
            <span className={Classes.icon}><CartIcon/></span>
            <span>your cart</span>
            <span className={Classes.badge}> 3</span>
        </button>
    </>
}
export default HeaderCartButton;