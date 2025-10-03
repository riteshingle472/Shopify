import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'
import OrderSummary from '../OrderSummary/OrderSummary'
import OrderPlaced from '../OrderPlaced/OrderPlaced'
import SwiperSlider from '../Swiper/SwiperSlider'
import Footer from '../Footer/Footer'

const Home = () => {

  const [searchTerm , setSearchTerm] = useState('')
  const [isScroll , setIsScroll] = useState('')
  const [activePanel , setActivePanel] = useState(null)
  const [cart , setCart] = useState(()=>{
    const store = localStorage.getItem('cart')
    return  store ? JSON.parse(store) : []
  })
  const [wishlist , setwishlist] = useState(()=>{
    const storeWishlist = localStorage.getItem('wishlist');
    return storeWishlist ? JSON.parse(storeWishlist) : []
  });
  const [orderSummary ,setOrderSummary] = useState(false)
  const [orderPlaced ,setOrderPlaced] = useState(false)
  
  // Total calculation

  const subtotal = cart.reduce((acc,item)=>{return acc + item.price * item.quantity },0)
  const totalItem = cart.reduce((acc , item)=>{ return acc + item.quantity},0)
  // const totalWish = wishlist.reduce((acc , item)=>{ return acc + item.quantity},0)
  const shippingFee = totalItem * 2;
  const orderTotal = shippingFee + subtotal


  useEffect(()=>{
    const changeNav = ()=>{
      setIsScroll(window.scrollY > 5);
    }
    window.addEventListener('scroll',changeNav)
  })

  // Store Item in local Storage

  useEffect(()=>{
    localStorage.setItem('cart' , JSON.stringify(cart))
    localStorage.setItem('wishlist' , JSON.stringify(wishlist))
  },[cart,wishlist])

  

  //Handle Scroll

  const handleScroll = ()=>{
    const section = document.getElementById('product');

    if(section){
      section.scrollIntoView({behavior:'smooth'})
    }
  }

  // Handle WishList and Cart

  const handlePanel = (tabname)=>{
    setActivePanel((prev)=>{
      return prev === tabname ? null : tabname;
    })
  }

  // Close Panel 

  const closePanel = ()=>{
    setActivePanel(null)
  }

  // Add To Cart Function 
  const addToCart = (product)=>{
    const alreadyExist = cart.find((item)=> { return item.id === product.id})
    if(alreadyExist){
      return alert('Item Is Already In The Cart');
    }
    setCart([...cart ,{...product, quantity: 1}])
  }

  // Quantity Increment and Decrement

  const quantityInc = (product)=>{
    setCart(cart.map(item=>(
      item.id === product.id ? 
      {...item , quantity: item.quantity + 1} :
       item
    )))
  }
  const quantityDec = (product)=>{
    setCart(cart.map(item=>(
      item.id === product.id && item.quantity > 1? 
      {...item , quantity: item.quantity - 1} :
       item
    )))
  }

  // Remove Item From Cart

  const removeProduct = (product)=>{
    setCart(cart.filter(item => item.id !== product.id))
  }

  // Add in wishlist

  const AddInWishlist = (product)=>{
    const isInWishlsit = wishlist.some(item => item.id === product.id)

    if(isInWishlsit){
      setwishlist(wishlist.filter(item => item.id !== product.id))
    }else{
      const addDate = new Date().toLocaleDateString('en-GB')
      setwishlist([...wishlist , {... product ,addDate }])
    }
  }


  return (
    <div>
      <Navbar handleScroll={handleScroll} setSearchTerm={setSearchTerm} isScroll={isScroll} handlePanel={handlePanel} totalItem={totalItem} wishlist ={wishlist}/>
      <Banner/>
      <Product searchTerm={searchTerm} addToCart={addToCart} wishlist={wishlist } AddInWishlist= {AddInWishlist}/>
      <Cart activePanel={activePanel} closePanel={closePanel} cart={cart} removeProduct={removeProduct} quantityInc={quantityInc} quantityDec={quantityDec} subtotal={subtotal} shippingFee={shippingFee} orderTotal={orderTotal} setOrderSummary={setOrderSummary}/>
      <Wishlist activePanel={activePanel} closePanel={closePanel} wishlist={wishlist} setwishlist={setwishlist} addToCart ={addToCart} />
      {
        orderSummary && 
        <OrderSummary cart={cart} orderTotal={orderTotal} shippingFee={shippingFee} subtotal={subtotal} setOrderSummary={setOrderSummary} setOrderPlaced={setOrderPlaced}/>
      }
      {
        orderPlaced &&  
        <OrderPlaced setOrderPlaced={setOrderPlaced} setOrderSummary={setOrderSummary} setCart={setCart}/>
      }
      <SwiperSlider/>
      <Footer/>
    </div>
  )
}

export default Home
