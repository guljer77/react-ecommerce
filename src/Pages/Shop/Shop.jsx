import React, { useState } from "react";
import Container from "../../Components/Container";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR, CgPhone } from "react-icons/cg";
import Product from "../../../public/products.json";
import { FaBars, FaBottleWater, FaShirt } from "react-icons/fa6";
import { GiConverseShoe } from "react-icons/gi";
import { RiBearSmileLine } from "react-icons/ri";
import { GiBilledCap } from "react-icons/gi";
import { IoBag } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md";
import { IoIosShirt } from "react-icons/io";
import Card from "./Card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function Shop() {
  const [category, setCategory] = useState(false);
  const [product, setProduct] = useState(Product);
  const [searchTitle, setSearchTitle] = useState("");

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;
  const indexOfLastPage = currentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const currentProduct = product.slice(indexOfFirstPage, indexOfLastPage);
  //pagination function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const updateToggle = id => {
    const updateProduct = Product.filter(item => item.category === id);
    setProduct(updateProduct);
  };

  const searchOutput = e => {
    const searchParams = e.target.value;
    setSearchTitle(searchParams);
    const filtered = Product.filter(item =>
      item.name.toLowerCase().includes(searchParams.toLowerCase())
    );
    setProduct(filtered);
  };

  return (
    <div>
      <div className="bg-purple py-5 z-0">
        <Container>
          <div className="">
            <div className="flex items-center justify-between lg:gap-0 gap-10">
              <div className="">
                <div
                  onClick={() => setCategory(!category)}
                  className="flex w-1/4 items-center gap-3 cursor-pointer text-white text-[18px]"
                >
                  Category
                  <span>
                    <TfiMenuAlt />
                  </span>
                </div>
              </div>
              <div className="w-3/4">
                <form action="">
                  <input
                    type="text"
                    onChange={searchOutput}
                    placeholder="Search Product"
                    value={searchTitle}
                    className="lg:px-3 py-2 outline-0 lg:w-[90%] w-[70%]"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="px-3 py-2 lg:w-[10%] w-[30%] bg-yellow text-purple cursor-pointer"
                  />
                </form>
              </div>
            </div>
          </div>
        </Container>
        {category && (
          <div>
            <ul className="">
              <li
                onClick={() => setProduct(Product)}
                className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
              >
                <span>
                  <FaBars />
                </span>
                All
              </li>
              <li
                onClick={() => updateToggle("Beauty")}
                className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
              >
                <span>
                  <RiBearSmileLine />
                </span>
                Beauty
              </li>
              <li
                onClick={() => updateToggle("Shoes")}
                className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
              >
                <span>
                  <GiConverseShoe />
                </span>
                Shoes
              </li>
              <li
                onClick={() => updateToggle("Phones")}
                className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
              >
                <span>
                  <MdOutlineHeadphones />
                </span>
                Electronics
              </li>
              <li
                onClick={() => updateToggle("Bags")}
                className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
              >
                <span>
                  <FaShirt />
                </span>
                Women Fashion
              </li>
              <li
                onClick={() => updateToggle("Men's Sneaker")}
                className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
              >
                <span>
                  <IoIosShirt />
                </span>
                Man Fashion
              </li>
              <li
                onClick={() => updateToggle("Bag")}
                className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
              >
                <span>
                  <IoBag />
                </span>
                Women Bags
              </li>
              <li
                onClick={() => updateToggle("Cap")}
                className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
              >
                <span>
                  <GiBilledCap />
                </span>
                Man Caps
              </li>
              <li
                onClick={() => updateToggle("Earphones")}
                className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
              >
                <span>
                  <CgPhone />
                </span>
                Earphone
              </li>
              <li
                onClick={() => updateToggle("Bottle")}
                className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
              >
                <span>
                  <FaBottleWater />
                </span>
                Bottle
              </li>
            </ul>
          </div>
        )}
        {searchTitle && product && (
          <div className="absolute z-50 bg-gray-200 p-3 lg:w-[620px] w-full h-auto scroll-my top-[160px] lg:left-[355px]">
            {searchTitle &&
              product.map(item => (
                <div
                  key={item?.id}
                  className="bg-gray-100 rounded-md shadow-lg p-5 mb-2"
                >
                  <Link to={`/details/${item?.id}`}>
                    <div className="flex items-center justify-between gap-5">
                      <div className="w-1/6">
                        <img src={item?.img} alt="" className="w-[80px]" />
                      </div>
                      <div className="w-5/6">
                        <h4 className="text-[18px]">{item?.name}</h4>
                        <p className="text-[15px] text-purple">
                          $ {item?.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="py-10">
        <Container>
          <div className="lg:flex items-start justify-between gap-5">
            <div className="lg:w-1/4 lg:block hidden">
              <div>
                <ul className="">
                  <li
                    onClick={() => setProduct(Product)}
                    className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                  >
                    <span>
                      <FaBars />
                    </span>
                    All
                  </li>
                  <li
                    onClick={() => updateToggle("Beauty")}
                    className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                  >
                    <span>
                      <RiBearSmileLine />
                    </span>
                    Beauty
                  </li>
                  <li
                    onClick={() => updateToggle("Shoes")}
                    className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                  >
                    <span>
                      <GiConverseShoe />
                    </span>
                    Shoes
                  </li>
                  <li
                    onClick={() => updateToggle("Phones")}
                    className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                  >
                    <span>
                      <MdOutlineHeadphones />
                    </span>
                    Electronics
                  </li>
                  <li
                    onClick={() => updateToggle("Bags")}
                    className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                  >
                    <span>
                      <FaShirt />
                    </span>
                    Women Fashion
                  </li>
                  <li
                    onClick={() => updateToggle("Men's Sneaker")}
                    className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                  >
                    <span>
                      <IoIosShirt />
                    </span>
                    Man Fashion
                  </li>
                  <li
                    onClick={() => updateToggle("Bag")}
                    className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                  >
                    <span>
                      <IoBag />
                    </span>
                    Women Bags
                  </li>
                  <li
                    onClick={() => updateToggle("Cap")}
                    className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                  >
                    <span>
                      <GiBilledCap />
                    </span>
                    Man Caps
                  </li>
                  <li
                    onClick={() => updateToggle("Earphones")}
                    className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                  >
                    <span>
                      <CgPhone />
                    </span>
                    Earphone
                  </li>
                  <li
                    onClick={() => updateToggle("Bottle")}
                    className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                  >
                    <span>
                      <FaBottleWater />
                    </span>
                    Bottle
                  </li>
                </ul>
              </div>
              <div className="mt-5">
                <h4 className="text-[18px] font-medium">Price Range</h4>
                <div>
                  <ul>
                    <li className="border px-5 py-2 cursor-pointer">
                      $10 - $50
                    </li>
                    <li className="border px-5 py-2 cursor-pointer">
                      $51 - $150
                    </li>
                    <li className="border px-5 py-2 cursor-pointer">
                      $151 - $200
                    </li>
                    <li className="border px-5 py-2 cursor-pointer">
                      $201 - $250
                    </li>
                    <li className="border px-5 py-2 cursor-pointer">
                      $251 - $300
                    </li>
                    <li className="border px-5 py-2 cursor-pointer">
                      $301 - $350
                    </li>
                    <li className="border px-5 py-2 cursor-pointer">
                      $351 - $400
                    </li>
                    <li className="border px-5 py-2 cursor-pointer">
                      $401 - $450
                    </li>
                    <li className="border px-5 py-2 cursor-pointer">
                      $451 - $500
                    </li>
                    <li className="border px-5 py-2 cursor-pointer">
                      $501 - $1000
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-3/4 w-full">
              <div className="flex items-center justify-between">
                <h4>showing 01-9 of 120 Result</h4>
                <div className="flex items-center gap-5">
                  <span>
                    <CgMenuGridR />
                  </span>
                  <span>
                    <TfiMenuAlt />
                  </span>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {currentProduct.map(item => (
                  <Card key={item?.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-10">
        <Container>
          <Pagination
            paginate={paginate}
            productPerPage={productPerPage}
            totalProduct={product.length}
            activePage={currentPage}
          />
        </Container>
      </div>
    </div>
  );
}

export default Shop;
