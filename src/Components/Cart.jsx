import React, { useContext } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
function Cart() {
  // console.log(Tprice)
  // console.log(price)
//   return (<>
//     {/* <Tprice.Consumer> */}
//       {/* {value => {
//         console.log(value)
//         return <> */}
         
//         {/* </> */}
//       {/* }} */}

//     {/* </Tprice.Consumer> */}


// //   </>)
return(
  <> <div className="cart_div">
  <h1 >Billing<AddShoppingCartIcon /></h1>
</div>
<div>
  <h4>Total Amount is </h4>
</div></>
)

}

export default Cart;