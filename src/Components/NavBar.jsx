import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
// import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
// import CartComp from './Cart'
// import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
// import Çart from './Cart';
// import App from './App';




function NavBar() {
  return (<><div className="navComp">
    {/* <Router>
<Switch> */}
{/* <Route exact path="/" component={App}/> */}
  {/* <Route path="/Cart" component={Cart}/> */}
{/* </Switch>
    </Router> */}
<Navbar bg="dark" variant="dark">
    <Navbar.Brand className="left" href="#home">
      <StoreIcon/>
      Ecommerce Website
      {/* <ul className="right">
  <li><a href="#">
    <span className="shoppingCart"><ShoppingCartIcon/>Cart</span>
    </a></li>
</ul> */}
    </Navbar.Brand>

  </Navbar>
  </div></>)

}

export default NavBar;