import { useState } from "react";
import { products } from "../data/data";

export default function Products() {
  const [orders, setOrders] = useState<
    {
      product: string;
      quantity: number;
    }[]
  >([]);

  const addToCart = (product: string) => {
    setOrders([...orders, { product, quantity: 1 }]);
  };

  const removeFromCart = (product: string) => {
    setOrders(orders.filter((order) => order.product !== product));
  };
  const increaseQuantity = (product: string) => {
    setOrders(
      orders.map((order) =>
        order.product === product
          ? { ...order, quantity: order.quantity + 1 }
          : order
      )
    );
  };
  const decreaseQuantity = (product: string) => {
    setOrders(
      orders.map((order) =>
        order.product === product
          ? { ...order, quantity: order.quantity - 1 }
          : order
      )
    );
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
            {orders.some((order) => order.product === product.name) ? (
              <button
                className="px-3 py-2 border rounded border-red-500"
                onClick={() => removeFromCart(product.name)}
              >
                Remove
              </button>
            ) : (
              <button
                className="px-3 py-2 border rounded border-gray-500"
                onClick={() => addToCart(product.name)}
              >
                Add
              </button>
            )}
          </div>
        ))}
      </div>
      Orders
      <div className="flex gap-x-2">
        {orders &&
          orders.map((order, key) => (
            <div key={key} className="p-3 bg-gray-200 my-3 rounded">
              <h1>Name : {order.product}</h1>
              <h1>Quantity : {order.quantity}</h1>
              <p>Change Quantity</p>
              <div className="flex items-center gap-x-3">
                <button
                  className="px-3 py-2 border-gray-500 border"
                  onClick={() => increaseQuantity(order.product)}
                >
                  +
                </button>

                <button
                  className="px-3 py-2 border-gray-500 border"
                  onClick={() => decreaseQuantity(order.product)}
                  disabled={order.quantity <= 1}
                >
                  -
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
