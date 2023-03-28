import React from 'react';

const Item = ({idMeal,price,strMeal,strMealThumb,handelAddCart}) => {
    
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={strMealThumb} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full" onClick={()=> handelAddCart(strMeal,price)}>add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default Item;