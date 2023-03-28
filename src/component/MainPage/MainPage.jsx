import React, { useEffect, useState } from 'react';
import { addtoStore } from '../../utilities/storage';
import CartDetails from '../CartDetails/CartDetails';
import Item from '../Item/Item';

const MainPage = () => {
    const [items , setItems] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('data/fakeData.json')
        .then(res=>res.json())
        .then(data => setItems(data.meals))
    },[])


    const handelAddCart = (name,price) =>{
       let newCart = []
        const exsist = cart.find(item => item.name === name)
        if(exsist){
            exsist.quantity = exsist.quantity + 1
            const otherItem = cart.filter(item => item.name !== name)
            newCart = ([...otherItem,exsist])
        }else{
       let quantity = 1;
         newCart = [...cart,{name,price,quantity}]
        
        }
        addtoStore(newCart)
        setCart(newCart)
       
    }
    return (
        <div className='flex flex-col md:flex-row gap-10 md:w-[1280] mx-auto'>
            <section className='md:w-3/4 border-r p-2 grid md:grid-cols-4 gap-4 order-2 md:order-1'>
                {
                   items.map(item => <Item key={item.idMeal} {...item} handelAddCart ={handelAddCart}/>) 
                    }
                
            </section>
            <section className='md:w-1/4 order-1 md:order-2'>
                <h2 className='font-extrabold text-2xl text-center'>Total Itmes Added</h2>
                <CartDetails cart={cart}/>
            </section>
        </div>
    );
};

export default MainPage;