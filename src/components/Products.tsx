import { useState } from "react";
import { products } from "../data/data";

export default function Products() {
  const [orders, setOrders] = useState([{}]);

  const addToCart = (product: string) => {
    setOrders([...orders, { product, quantity: 1 }]);
  };
  return (
    <div className="p-10">
      <div className="grid grid-cols-5 gap-10">
        {products.map((product, key) => (
          <div
            key={key}
            className="p-3 bg-gray-200 my-3 flex items-center gap-x-3 rounded"
          >
            <h1>{product.name}</h1>
            <button
              className="px-3 py-2 border rounded border-gray-500"
              onClick={() => addToCart(product.name)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
      <div>
        {orders &&
          orders.map((order, key) => (
            <div
              key={key}
              className="p-3 bg-gray-200 my-3 flex flex-col items-center gap-x-3 rounded"
            ></div>
          ))}
      </div>
    </div>
  );
}
