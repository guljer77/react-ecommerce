import React from "react";
import Container from "../../Components/Container";
import { FaTrash } from "react-icons/fa";

function CartPage() {
  const product = JSON.parse(localStorage.getItem("product"));
  return (
    <div className="py-10">
      <Container>
        <div className="flex items-center justify-between pb-2">
          <p className="w-1/5">Item</p>
          <p className="w-1/5">Price</p>
          <p className="w-1/5">Quantity</p>
          <p className="w-1/5">Subtotal</p>
          <p className="w-1/5">Remove</p>
        </div>
        <hr className="border border-purple" />
        <div className="pt-5">
          {product.map(item => (
            <div key={item?.id} className="flex items-center justify-between">
              <p className="w-1/5">
                <img src={item?.img} alt="" className="w-[80px] h-auto" />
              </p>
              <p className="w-1/5">{item?.price}</p>
              <p className="w-1/5">{item?.quantity}</p>
              <p className="w-1/5">{item?.price}</p>
              <p className="w-1/5">
                <FaTrash />
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CartPage;
