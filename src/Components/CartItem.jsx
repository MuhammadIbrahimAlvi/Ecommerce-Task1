import React,{createContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Tprice =createContext();

function CartItem(props) {
  const classes = useStyles();
  const [product,setnewProduct] = useState(0)
const [totalPrice,setTotalPrice] =useState(0);
  // const {products} =props;
  useEffect(()=>{
    if(product===0){
      setTotalPrice(0)
    }
    
    })
const addToCart=()=>{
setnewProduct(product+1);

  setTotalPrice(product+1*props.price);


 
 console.log(totalPrice);
}
const removeItem=()=>{
  if(product===0){
    alert("Quantity cann't be less than zero")
  }
  else{
    setnewProduct(product-1)
setTotalPrice(product*props.price)

  }
 
  // setTotalPrice(props.price-props.price)
  
  // setTotalPrice(product*props.price);
console.log(totalPrice);
}
// let Fprice =totalPrice;
  return (
    <Tprice.Provider value={totalPrice}>

    
    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          // image={products.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
            {/* {products.name} */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.description}
           {/* {
             products.description
           } */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h4 className="cart_itemHeadings">
             Total Price in $:
           {props.price}
           {/* {products.price} */}
             </h4> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h4 className="cart_itemHeadings">
             Total Quantity:
           {product}
             </h4>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h4 className="cart_itemHeadings">
             Total Price:
    {totalPrice}
             </h4>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={addToCart}>
          
        
         <AddShoppingCartIcon />   Add to Cart
        
           </Button>
           <Button size="small" color="primary" onClick={removeItem}>
          
        
          Remove <RemoveShoppingCartIcon/>
         
            </Button>
        
      </CardActions>
    </Card>
    </Tprice.Provider>
  );
}

export default CartItem;
export {Tprice};