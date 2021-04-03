import React, { useContext } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import CartPic from '../assets/carosel.jpg';
function Cart(props) {
 
const {cartItems}=props;

return<>  
<NavBar/>
<div className="cart_Carousel"><img src={CartPic} alt="Cart Pic" width="100%" /></div>
<div className="cart_Details">
<h2>Cart Details</h2>
cartItems.
<div>
  
</div>

</div>
<Footer/>
 </>



}

export default Cart;