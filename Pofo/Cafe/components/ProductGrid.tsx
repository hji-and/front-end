import React from "react";
import { ProductItem } from "../types";
import product1 from "./img/product1.png";
import product2 from "./img/product2.png";
import product3 from "./img/teddy.png";
import product4 from "./img/product4.png";
import product5 from "./img/product5.png";
import product6 from "./img/product6.png";

const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    title: "딸기 생크림 케이크",
    category: "Dessert",
    price: "₩7,500",
    imageUrl: product1,
  },
  {
    id: 2,
    title: "초콜릿 너티 쿠키",
    category: "Dessert",
    price: "₩3,900",
    imageUrl: product2,
  },
  {
    id: 3,
    title: "헤리티지 에이프런 테디베어",
    category: "Goods",
    price: "₩12,500",
    imageUrl: product3,
  },
  {
    id: 4,
    title: "그린 데비 머그 414ml",
    category: "Goods",
    price: "₩18,000",
    imageUrl: product4,
  },
  {
    id: 5,
    title: "초콜릿 칩 프라푸치노",
    category: "Drink",
    price: "₩8,300",
    imageUrl: product5,
  },
  {
    id: 6,
    title: "샌드위치",
    category: "Sandwich",
    price: "₩9,400",
    imageUrl: product6,
  },
];

export const ProductGrid: React.FC = () => {
  return (
    <section
      id="shop"
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-stone-20"
    >
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-2">
          Selected Items
        </span>
        <h2 className="text-3xl font-light text-gray-900 tracking-wide">
          NEW ARRIVALS
        </h2>
        <div className="w-12 h-0.5 bg-gray-900 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[3/4]">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>

              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white text-black px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white">
                View Details
              </button>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1 tracking-widest">
                {product.category}
              </p>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 font-light">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <button className="border-b border-gray-900 pb-1 text-sm tracking-widest hover:text-gray-600 hover:border-gray-600 transition-colors">
          VIEW ALL PRODUCTS
        </button>
      </div>
    </section>
  );
};
