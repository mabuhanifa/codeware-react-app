import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
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
  const makeOrder = async () => {
    const res = await fetch(
      "https://helpful-beret-foal.cyclic.app/api/orders/items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orders),
      }
    );
    const data = await res.json();
    if (data.success === true) {
      toast.success("Orders Placed Successfully");
      setOrders([]);
    }
  };
  return (
    <div className="p-10">
      <Toaster />
      <div className="grid grid-cols-5 gap-10">
        {products.map((product, key) => (
          <div
            key={key}
            className="p-3 bg-gray-200 my-3 flex items-center gap-x-3 rounded"
          >
            <h1>{product.name}</h1>
            {orders.some((order) => order.product === product.name) ? (
              <button
                className="px-3 py-2 border rounded bg-red-500 text-white"
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
      <h1 className="text-2xl text-center font-bold">Products</h1>
      <div className="flex gap-x-2 justify-center">
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
      <div className="flex justify-center">
        {orders.length > 0 && (
          <button
            className="text-2xl text-center font-bold bg-indigo-700 px-10 py-3 text-white rounded my-10"
            onClick={makeOrder}
          >
            Make Order
          </button>
        )}
      </div>
    </div>
  );
}
