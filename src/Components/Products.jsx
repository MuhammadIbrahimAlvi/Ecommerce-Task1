import React from 'react';
import CartItem from './CartItem';
import Handsfree from '../assets/Handsfree.jpg';

import Airpod from '../assets/Airpods.jpg'
import MacBooks from '../assets/MacBook.jpg'
import Iphones from '../assets/Iphone.jpg'

function Products() {
  
  return (<>
  <div className="div_Products">
    

  <CartItem name="Airpods" description="AirPods Available" image={Airpod} price="100"/>
  <CartItem name="Handsfree" description="Handsfree Available" image={Handsfree} price="20"/>
  <CartItem name="Iphone" description="Iphones Available" image={MacBooks} price="2500"/>
  <CartItem name="Macbook" description="Macbooks Available" image={Iphones} price="800"/>

  </div>
  
  </>)

}

export default Products;