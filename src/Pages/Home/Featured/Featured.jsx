import React, { useState } from "react";
import Product from "../../../../public/products.json";
import Container from "../../../Components/Container";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
} from "react-icons/fa6";
import Card from "../../Shop/Card";

function Featured() {
  const [product, setProduct] = useState(Product);
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
            {product.slice(0, 16).map(item => <Card key={item?.id} item={item} />)}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Featured;
