import React, { useEffect, useState } from 'react';
import { getStore } from '../../utilities/storage';
import Trow from './Trow';

const CartDetails = ({cart}) => {
  const [storeCart,setStoreCart] = useState(cart)
    const totalPrice = storeCart.reduce((preVal,item)=> (parseInt(item.price)*parseInt(item.quantity)) + preVal,0)
  
    useEffect(()=>{
      const storeCarts = getStore()
      if(setStoreCart){
        setStoreCart(storeCarts)
      }
    },[cart])
    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        
        <th cla>Name</th>
        <th>quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        storeCart.map(item => <Trow key={item.name} item={item} />) 
     }
      {/* row 2
      <tr className="hover">
        
        <td>Hart Hagerty</td>
        <th></th>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      {/* <tr>
        
        <td>Brice Swyre</td>
        <th></th>
        <td>Red</td>
      </tr> */}
    </tbody>
    <tfoot>
    <tr >
        
        <th colSpan={'2'} >Total Price</th>
        
        <th>{totalPrice}$</th>
      </tr>
    </tfoot>
  </table>
</div>
    );
};

export default CartDetails;