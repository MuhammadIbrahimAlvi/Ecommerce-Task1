import React from 'react';
import NavBar from './NavBar';
import Products from './Products';
import Footer from './Footer';

import Carousel from './Carousel';


const Home=()=>{
   
return (<>
<NavBar/>
<Carousel/>
<div className="product_Componentdiv"> <h1>Products</h1>
 
 <Products/>
 
 </div>


<Footer/>

</>)
}

export default Home;
