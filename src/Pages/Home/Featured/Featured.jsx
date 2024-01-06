import React, { useState } from "react";
import Product from "../../../../public/products.json";
import Container from "../../../Components/Container";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaStar,
  FaRegStarHalfStroke,
  FaRegStar,
  FaRegEye,
} from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import Rating from "react-rating";

function Featured() {
  const [product, setProduct] = useState(Product);
  console.log(product);
  return (
    <div className="py-10">
      <Container>
        <div>
          <div className="flex items-center justify-between pb-2">
            <h4 className="text-[22px] font-semibold uppercase">
              Featured Product
            </h4>
            <Link to="/shop" className="flex items-center gap-1 text-[16px]">
              All Product{" "}
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </div>
          <hr className="border border-purple mb-5" />
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {product.slice(0, 16).map(item => (
              <div key={item?.id} className="bg-gray-50 transition-all duration-500 hover:scale-90">
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
                    <h4 className="text-[18px] font-medium">{item?.name.slice(0,15)}</h4>
                    <p className="text-purple text-[16px]">$ {item?.price}</p>
                    <div className="flex items-center justify-between py-3">
                      <span className="flex items-center gap-1 underline text-purple"><FaRegEye /> Details</span>
                      <span className="flex items-center gap-1 px-3 py-1 bg-purple text-white rounded-md"><IoMdCart />Add to Cart</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Featured;
