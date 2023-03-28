import React, { useEffect, useState } from 'react';

const Trow = ({item}) => {
  
    
  
    return (
    
             <tr>
        
        
        <td>{item.name.length > 25 ? item.name.slice(0,20)+'...': item.name}</td>
        <th>{item.quantity}</th>
        <td>{parseInt(item.price)* parseInt(item.quantity)}$</td>
      </tr>
        
    );
};

export default Trow;