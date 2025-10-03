import React from "react";

const OrderPlaced = ({setOrderPlaced ,setOrderSummary ,setCart}) => {
  return (
    <section className='flex justify-center items-center bg-black/90 fixed inset-0 z-50'>
      <div className='flex justify-center items-center flex-col bg-zinc-300 p-8 w-[400px] rounded-2xl border-1 border-zinc-300' >
        <h2 className="text-green-500 text-4xl font-bold">Order Placed !</h2>
        <p className="text-zinc-700 my-4">Thhanks For Purchase!</p>
        <button className="px-10 rounded-sm py-3 bg-blue-600 text-white active:bg-blue-700" onClick={()=>{setOrderPlaced(false), setCart([]) ,setOrderSummary(false)}}>Close</button>
      </div>
    </section>
  );
};

export default OrderPlaced;
