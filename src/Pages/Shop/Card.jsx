import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaRegStarHalfStroke,
  FaRegStar,
  FaRegEye,
} from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import Rating from "react-rating";

function Card({ item }) {
  return (
    <div className="bg-gray-50 transition-all duration-500 hover:scale-90">
      <Link to={`/details/${item?.id}`} className="relative">
        <img src={item?.img} alt="Image" className="w-full" />
        <div className="p-5">
          <div className="py-3 flex items-center gap-1">
            <Rating
              placeholderRating={item?.ratings}
              emptySymbol={
                <span>
                  <FaRegStarHalfStroke className="text-yellow text-[18px]" />
                </span>
              }
              placeholderSymbol={
                <span>
                  <FaStar className="text-yellow text-[18px]" />
                </span>
              }
              fullSymbol={
                <span>
                  <FaRegStar className="text-gray-500 text-[18px]" />
                </span>
              }
            />
            <span>(940)</span>
          </div>
          <h4 className="text-[18px] font-medium">{item?.name.slice(0, 15)}</h4>
          <p className="text-purple text-[16px]">$ {item?.price}</p>
          <div className="flex items-center justify-between py-3">
            <span className="flex items-center gap-1 underline text-purple">
              <FaRegEye /> Details
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-purple text-white rounded-md">
              <IoMdCart />
              Add to Cart
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
