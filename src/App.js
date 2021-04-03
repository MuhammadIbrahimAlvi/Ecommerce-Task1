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

 
 <Route path="/" exact component={Home}/>
 <Route path='/cart' component={Cart}/>

 </Switch>
 
  </Router>
  
</>
  )
}

export default App;
