import React, { useState } from 'react';
import Cart from './Components/Cart';
import Home from './Components/Home'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Carts from './Components/Cart';
function App() {
const [cartItems,setCartItems]=useState();
  return (<>
  <Router>
    <Switch>

 
 <Route path="/Ecommerce-Task1/" exact component={Home}/>
 <Route path='/Ecommerce-Task1/cart' component={Cart}/>

 </Switch>
 
  </Router>
  
</>
  )
}

export default App;
