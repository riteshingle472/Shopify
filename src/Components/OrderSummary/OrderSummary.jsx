import React from 'react'

const OrderSummary = ({cart, subtotal ,shippingFee,orderTotal ,setOrderSummary ,setOrderPlaced}) => {
  return (
    <section className='flex justify-center items-center bg-black/90 fixed inset-0 z-50'>
        <div className='bg-zinc-300 p-8 h-[75vh] w-[600px] rounded-2xl border-1 border-zinc-300'>
            <h2 className='text-center text-zinc-800 font-bold text-3xl mb-5'>Order Summary</h2>

            <div className=''>
                <div className='scroll rounded-md flex flex-col gap-1 flex-1 overflow-auto h-[30vh] bg-zinc-400/7'>
                    {
                        cart.map((item)=>{
                            return(
                                <div key={item.id} className='flex justify-between items-center'>
                                    <span className='text-zinc-800 py-2'>{item.name}( x{item.quantity})</span>
                                    <span className='text-zinc-800 py-2'>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex justify-between pt-3'>
                    <span className='text-zinc-800 font-semibold'>Sub Total</span>
                    <span className='text-zinc-800 font-semibold'>$ {subtotal.toFixed(2)}</span>
                </div>

                <div className='flex justify-between py-3'>
                    <span className='text-zinc-800 font-semibold'>Shipping & Handling</span>
                    <span className='text-zinc-800 font-semibold'>$ {shippingFee.toFixed(2)}</span>
                </div>

                <div className='flex justify-between pt-3 mb-5 border-t-1 border-zinc-400'>
                    <span className='text-blue-600 font-bold text-xl'>Order & Total</span>
                    <span className='text-blue-600 font-semibold text-xl'>$ {orderTotal.toFixed(2)}</span>
                </div>

                <div className='flex justify-between sm:gap-3 gap-2 mt-10'>
                    <button className='bg-zinc-800 text-white flex-1 active:bg-zinc-900 py-1 sm:py-3 cursor-pointer' onClick={()=>{setOrderSummary(false)}}>Cancel</button>
                    <button className='bg-blue-800 flex-1 text-white active:bg-blue-900 sm:py-3 py-1 cursor-pointer' onClick={()=>{setOrderPlaced(true)}}>Place Order</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OrderSummary
