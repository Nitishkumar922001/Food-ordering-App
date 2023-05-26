import ReactDom from 'react-dom';
import classes from './Modal.module.css';


const BackDrop=(props)=>{
return<div onClick={props.onClick}  className={classes.backdrop}></div>
}

const ModalContent=props=>{

    return<div className={classes.modal}>  
    <div className={classes.content}>{props.children}</div>
    </div>

}
const Modal=(props)=>{
return<>
    {ReactDom.createPortal(<BackDrop onClick={props.onClick}/>,document.getElementById('overlay'))}
    {ReactDom.createPortal(<ModalContent>{props.children}</ModalContent>,document.getElementById('overlay'))}
</>

}
export default Modal;