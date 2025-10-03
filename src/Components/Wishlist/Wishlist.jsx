import React from "react";

const Wishlist = ({ activePanel, closePanel ,setwishlist , wishlist ,addToCart }) => {
  return (
    <div
      className={`bg-zinc-300 fixed right-0 bottom-0 left-auto top-0 w-full sm:w-[400px] border-l border-zinc-400 z-50 flex justify-between gap-5 flex-col py-3 transform transition-all duration-300 ${
        activePanel === "wishlist" ? "translate-0" : "translate-x-full"
      }`}
    >
      {/* Heading */}
      <div className="px-10">
        <h1 className="font-bold text-3xl text-zinc-800 text-center py-7">
          Your Wishlist
        </h1>
      </div>

      {/* Cart Item */}
      <div className="flex gap-y-3 flex-col flex-1 overflow-auto scroll">
        {wishlist.map((Product ,indx) => {
          return (
            <div key={Product.id} className={`flex gap-3 px-5 py-1 border-y-1 border-zinc-400  ${indx %2 === 0 ? 'bg-white' : 'bg-blue-200'}`}>
              {/* Cart Image */}
              <div className="w-20 h-20">
                <img src={Product.Image} className="h-full object-contain" />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-zinc-800 text-md sm:text-lg">{Product.name}</h4>
                  <p className="text-sm text-zinc-800">{Product.addDate}</p>
                </div>

                {/* Product Inc / Dec Btn and Quantity */}
                <div className="flex justify-between py-1">
                  <div className="">
                      {Product.onsale && (
                        <span className="text-zinc-500 line-through mr-3 font-semibold text-md sm:text-lg">
                          $ {Product.price.toFixed(2)}
                        </span>
                      )}
                      <span className="text-red-600 font-semibold text-md sm:text-lg">
                        $ {Product.price.toFixed(2)}
                      </span>
                    </div>
                  <button className="bg-blue-600 text-sm text-white px-2.5 sm:px-5 py-1.5 rounded-full active:bg-blue-700 cursor-pointer" onClick={()=>{addToCart(Product)}}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="flex gap-x-3 px-10">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] active:bg-blue-700 cursor-pointer"
          onClick={() => {
            closePanel();
          }}
        > Close</button>
        <button className={`text-white flex-1 h-[7vh] ${wishlist.length === 0 ? 'cursor-not-allowed bg-zinc-600' : 'cursor-pointer bg-blue-600  active:bg-blue-700 '}`} onClick={()=>{setwishlist([])}} disabled={wishlist.length === 0}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
