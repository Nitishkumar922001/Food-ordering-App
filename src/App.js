import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import ContextProviders from "./Store/ContextProvider";



function App() {
const [cartShow,setCartShow]=useState(false)
function cartShowHandler()
{
  setCartShow(true);
} 
function cartHideHandler()
{
  setCartShow(false);
} 
return (
    <ContextProviders>
{/* <> */}
    {cartShow&&<Cart onClick={cartHideHandler}/>}
    <Header onClick={cartShowHandler}></Header>
    
    <Meals/>
{/* // </> */}
  
     </ContextProviders>
  );
}

export default App;
