import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = ({ activePanel, closePanel, removeProduct, cart ,quantityInc ,quantityDec ,subtotal ,orderTotal ,shippingFee ,setOrderSummary}) => {
  return (
    <div
      className={`bg-zinc-300 fixed right-0 bottom-0 left-auto top-0 w-full sm:w-[450px] border-l border-zinc-400 z-50 flex justify-between gap-5 flex-col py-3 shadow-2xl transform transition-all duration-300 ${
        activePanel === "cart" ? "translate-0" : "translate-x-full"
      }`}
    >
      {/* Heading */}
      <div className="px-10">
        <h1 className="font-bold text-3xl text-zinc-800 text-center py-7">
          Your Cart
        </h1>
      </div>

      {/* Cart Item */}
      <div className="overflow-auto flex flex-col gap-1 flex-1 scroll">
        {cart.length === 0 ? 
        (<p className="text-center text-xl text-zinc-800">Your Cart Is Empty</p>) :
        (cart.map((product, indx) => {
            return (
              <div
                key={product.id}
                className={`flex gap-3 px-5 py-1 border-y-1 border-zinc-400 ${
                  indx % 2 === 0 ? "bg-blue-300" : "bg-white"
                }`}
              >
                {/* Cart Image */}
                <div className="w-20 h-20">
                  <img src={product.Image} className="h-full object-contain" />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-zinc-800 text-lg">
                      {product.name}
                    </h4>
                    <button
                      className="bg-rose-500 w-8 h-8 rounded-full text-white  flex justify-center items-center cursor-pointer active:bg-red-600 mr-[24px]"
                      onClick={() => {
                        removeProduct(product);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>

                  {/* Product Inc / Dec Btn and Quantity */}
                  <div className="flex justify-between py-1">
                    <div className="">
                      {product.onsale && (
                        <span className="text-zinc-500 line-through mr-3 font-semibold text-lg">
                          $ {product.price.toFixed(2)}{" "}
                        </span>
                      )}
                      <span className="text-red-600 font-semibold text-lg">
                        $ {product.price.toFixed(2)}{" "}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button className="bg-blue-600 w-7 h-7 rounded-full text-white  flex justify-center items-center text-[14px] active:bg-blue-700 cursor-pointer" onClick={()=>{quantityDec(product)}}>
                        <FaMinus />
                      </button>
                      <span>{product.quantity}</span>
                      <button className="bg-blue-600 w-7 h-7 rounded-full text-white  flex justify-center items-center text-[14px] active:bg-blue-700 cursor-pointer" onClick={()=>{quantityInc(product)}}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Cart Total */}
      <div className="px-10 border-y border-zinc-400">
        <div className="flex justify-between pt-2">
          <span className="text-zinc-800 ">Sub Total</span>
          <span className="text-zinc-800 ">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-zinc-800 ">Shipping & Handling</span>
          <span className="text-zinc-800 ">{shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-zinc-400">
          <span className="text-blue-600 font-bold text-lg ">Order Total</span>
          <span className="text-blue-600 font-bold text-lg ">${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Button */}
      <div className="flex gap-x-3 px-10">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] active:bg-blue-700 cursor-pointer"
          onClick={closePanel}
        >
          Close
        </button>
        <button className={`text-white flex-1 h-[7vh] active:bg-blue-700
            ${cart.length === 0 ? 'bg-gray-500 cursor-not-allowed  active:bg-gray-600' : 'bg-blue-600 cursor-pointer'}`} onClick={()=>{setOrderSummary(true)}} disabled={cart.length === 0}>
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
