import React from 'react';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
// import { Tprice } from './CartItem';

function App() {
  // const price = useContext(Tprice);

  return (<>
  <NavBar/>
 <div className="product_Componentdiv"> <h1>Products</h1>
 
 <Products/>
 
 </div>
 {/* <Switch>
   <Route exact path="/" component={App}/>
   <Route path="cart" component={Cart}/>
 </Switch> */}
 <Cart/>
 <Footer/></>
  )
}

export default App;
