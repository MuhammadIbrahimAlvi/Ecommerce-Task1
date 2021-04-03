import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import StoreIcon from '@material-ui/icons/Store';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



function NavBar() {
  const classes = useStyles();
  return (<><div className="navComp cart_itemHeadings">

<Navbar bg="dark" variant="dark">
  <Link to="/home">
    <Navbar.Brand href="#home">
      <StoreIcon/>
      Ecommerce Website
   
    </Navbar.Brand>
    </Link>

    <Navbar.Brand href="#cart" >
    <Link to="/cart">
 <Button 
variant="contained"
color="secondary"
className={classes.button}
startIcon={<AddShoppingCartIcon />}
>
Cart

</Button></Link>
   
    </Navbar.Brand>
  </Navbar>
  </div></>)

}

export default NavBar;