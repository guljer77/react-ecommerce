import React, { useState } from "react";
import Container from "../../../Components/Container";
import { FaBars, FaShirt } from "react-icons/fa6";
import { RiBearSmileLine } from "react-icons/ri";
import {
  MdHome,
  MdOutlineHeadphones,
  MdOutlineSportsBasketball,
} from "react-icons/md";
import { IoIosShirt, IoMdHome } from "react-icons/io";
import Slider1 from "../../../assets/slider/slider0.jpg";
import Slider2 from "../../../assets/slider/slider1.jpg";
import Slider3 from "../../../assets/slider/slider2.jpg";
import Slider4 from "../../../assets/slider/slider3.jpg";
import Product from "../../../../public/products.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Category = [
  {
    name: "All",
    icon: <FaBars />,
  },
  {
    name: "Beauty",
    icon: <RiBearSmileLine />,
  },
  {
    name: "Electronics",
    icon: <MdOutlineHeadphones />,
  },
  {
    name: "Women Fashion",
    icon: <FaShirt />,
  },
  {
    name: "Mens Fashion",
    icon: <IoIosShirt />,
  },
  {
    name: "Living & Kitchen",
    icon: <IoMdHome />,
  },
  {
    name: "Sports",
    icon: <MdOutlineSportsBasketball />,
  },
  {
    name: "Books",
    icon: <IoIosShirt />,
  },
  {
    name: "Property",
    icon: <MdHome />,
  },
];

const Slider = [
  {
    id: 1,
    name: "Brand New Shoes",
    category: "Shoes Fashion",
    title: "Come and Get it Now!",
    img: Slider1,
  },
  {
    id: 2,
    name: "Brand New Clots",
    category: "Women's Fashion",
    title: "Come and Get it Now!",
    img: Slider2,
  },
  {
    id: 3,
    name: "Brand New Living Product",
    category: "Living & Kitchen",
    title: "Come and Get it Now!",
    img: Slider3,
  },
  {
    id: 4,
    name: "Sports Wear",
    category: "Sports",
    title: "Come and Get it Now!",
    img: Slider4,
  },
];

function Banner() {
  const [category, setCategory] = useState(true);
  const [product, setProduct] = useState(Product);
  const [searchTitle, setSearchTitle] = useState("");

  const searchOutput = e => {
    const searchParams = e.target.value;
    setSearchTitle(searchParams);
    const filtered = Product.filter(item =>
      item.name.toLowerCase().includes(searchParams.toLowerCase())
    );
    setProduct(filtered);
  };

  return (
    <div className="relative">
      <div className="bg-purple py-5 z-0">
        <Container>
          <div className="">
            <div className="lg:flex items-center justify-between">
              <div className="lg:block hidden">
                <div
                  onClick={() => setCategory(!category)}
                  className="flex w-1/4 items-center gap-3 cursor-pointer text-white text-[18px]"
                >
                  Category
                  <span>
                    <FaBars />
                  </span>
                </div>
              </div>
              <div className="lg:w-3/4 w-full">
                <form action="">
                  <input
                    type="text"
                    onChange={searchOutput}
                    placeholder="Search Your Dream Product"
                    value={searchTitle}
                    className="lg:px-3 py-2 outline-0 lg:w-[90%] w-[80%]"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="px-3 py-2 lg:w-[10%] w-[20%] bg-yellow text-purple cursor-pointer"
                  />
                </form>
              </div>
            </div>
          </div>
        </Container>
        {searchTitle && product && (
          <div className="absolute z-50 bg-gray-200 p-3 lg:w-[620px] w-full h-auto scroll-my top-20 lg:left-[355px]">
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
      <Container>
        <div className="flex items-start justify-between z-0">
          <div className="lg:w-1/4 lg:block hidden">
            {category && (
              <div>
                <ul className="pt-5 pr-10">
                  {Category.map((item, i) => (
                    <li
                      key={i}
                      className="border flex items-center gap-3 px-5 py-2 cursor-pointer"
                    >
                      <span>{item?.icon}</span> {item?.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="lg:w-3/4 w-full pt-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {Slider.map(item => (
                <SwiperSlide key={item?.id}>
                  <div className="relative w-full lg:h-[70vh] h-[60vh]">
                    <div className="absolute z-0 w-full lg:h-[70vh] h-[60vh]">
                      <div className="flex items-center justify-start w-full lg:h-[70vh] h-[60vh] lg:pl-20 pl-10">
                        <div>
                          <h6 className="bg-black inline-block px-2 py-1 rounded-md text-white">
                            {item?.category}
                          </h6>
                          <h5 className="text-[22px] font-light text-gray-700">
                            {item?.title}
                          </h5>
                          <h4 className="text-[28px] font-semibold uppercase">
                            {item?.name}
                          </h4>
                          <button className="px-5 py-2 bg-purple text-white rounded-full mt-5">
                            Check In
                          </button>
                        </div>
                      </div>
                    </div>
                    <img
                      src={item?.img}
                      alt=""
                      className="w-full lg:h-[70vh] h-[60vh] z-0"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
