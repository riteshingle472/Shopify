import React, { act, useState } from "react";
import productList from "./ProductList";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Product = ({searchTerm, addToCart ,AddInWishlist,wishlist}) => {
  const categories = ["All", "Mens", "Womens", "New Arivals", "Kids", "On Sale"];
  const [activeTab, setActiveTab] = useState("All");

  let filteredItem = productList.filter((item)=>{
    const matchsCategory =  (activeTab === 'All' && productList) || (activeTab === 'New Arivals' && item.newArival) || (activeTab === 'On Sale' && item.onsale) || (activeTab === item.category)
    const matchsSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchsCategory && matchsSearch;
  })

  const renderProduct = filteredItem.map((product) => {
    return (
      // Card Div
      <div key={product.id} className="bg-zinc-50 shadow-lg p-5 border-1 border-zinc-300 rounded-lg">
        <div className="flex justify-between flex-wrap items-center">
          <button className={`md:text-3xl text-2xl  cursor-pointer ${wishlist.some(item=> item.id === product.id) ? 'text-rose-600' : 'text-zinc-300'}`}
          onClick={()=>{
            AddInWishlist(product);
          }}>
            <GoHeartFill />
          </button>
          <div>
            {(product.onsale || product.newArival) && (
              <span
                className={`md:px-3 md:py-2 sm:px-2 px-1 p-1 text-white ${
                  product.onsale ? "bg-red-600" : "bg-green-600"
                }`}
              >
                {product.onsale ? "Sale" : "New"}
              </span>
            )}
          </div>
        </div>

        {/* Image Div */}
        <div className="flex justify-center w-full h-[30vh] border-rose-400 ">
          <img src={product.Image} className="max-h-full max-w-full object-contain"/>
        </div>
        <div className="text-center mt-3">
          <h3 className="text-[1.4rem] font-semibold ">{product.name}</h3>
          <div className="mt-1 mb-5">
            {
                product.onsale && <span className="text-zinc-500 line-through mr-8 font-semibold text-lg">$ {product.price.toFixed(2)} </span>
            }
            <span className="text-red-600 font-semibold text-lg">$ {product.price.toFixed(2)} </span>
          </div>
          <button className="bg-blue-600 text-white text-lg py-2 rounded-full border-1 border-blue-700 cursor-pointer w-full active:bg-blue-700" onClick={()=>{
            addToCart(product)
          }}>
            Add To Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <section id="product" className="max-w-[1300px] mx-auto px-12 sm:py-10 my-10">

      {/* Product Heading */}
      <div className="text-left py-0 sm:py-3 my-5">
        <h1 className="text-zinc-800  text-2xl sm:text-4xl font-bold">
          Top Trendy & Fashionable
        </h1>
      </div>

      {/*Product  Tabs  */}
      <div className="flex justify-center flex-wrap items-center sm:mt-8 gap-4">
        {/* Tabs */}
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={`p-1 md:px-8 sm:px-5 px-3 py-2 rounded-full md:rounded-lg cursor-pointer md:text-xl text-md ${
                activeTab === category
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-200 text-zinc-800"
              }`}
              onClick={() => {
                setActiveTab(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Product Listing */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 mt-12">{
            filteredItem.length === 0 ? <p className="text-center text-lg col-span-4 text-zinc-800">No Product Found</p> : renderProduct
        }</div>
    </section>
  );
};

export default Product;
