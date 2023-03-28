const addtoStore = (item) =>{
    console.log(item)
    
    localStorage.setItem('sea-food', JSON.stringify(item))
    
}
const getStore =() => {
    const storeCart = localStorage.getItem('sea-food');
    if(storeCart){
        return JSON.parse(storeCart)
    }else{
        return []
    }
}
export{addtoStore,getStore}