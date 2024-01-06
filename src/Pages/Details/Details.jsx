import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Container";
import Product from "../../../public/products.json";
import { useState } from "react";
import Rating from "react-rating";
import {
  FaStar,
  FaRegStarHalfStroke,
  FaRegStar,
} from "react-icons/fa6";
import Card from "../Shop/Card";

function Details() {
  const { id } = useParams();
  const newProduct = Product.find(item => item.id === id);
  const {category} = newProduct;
  const [product, setProduct] = useState(Product);
  const [searchTitle, setSearchTitle] = useState("");
  const [plus, setPlus] = useState(1);
  const [tabs, setTabs] = useState(1);
  const decrement = () => {
    if (plus > 1) {
      setPlus(plus - 1);
    }
  };
  const increment = () => {
    setPlus(plus + 1);
  };

  const tabToggle = id => {
    setTabs(id);
  };

  const searchOutput = e => {
    const searchParams = e.target.value;
    setSearchTitle(searchParams);
    const filtered = Product.filter(item =>
      item.name.toLowerCase().includes(searchParams.toLowerCase())
    );
    setProduct(filtered);
  };

  const relatedProduct = Product.filter((item)=> item.category === category);

  return (
    <div className="">
      <div className="bg-purple py-5 z-0">
        <Container>
          <div className="">
            <div className="flex items-center justify-between lg:gap-0 gap-10">
              <div className="w-full">
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
      <Container>
        <div className="py-10">
          <div className="lg:flex items-start bg-gray-50 rounded-md justify-between gap-10 p-10">
            <div className="lg:w-2/5 w-full">
              <img src={newProduct?.img} alt="" className="w-full h-[400px]" />
            </div>
            <div className="lg:w-3/5 w-full lg:pt-0 pt-10">
              <h4 className="text-[22px] font-semibold pb-3">
                {newProduct?.name}
              </h4>
              <div className="py-3 flex items-center gap-1">
                <Rating
                  placeholderRating={newProduct?.ratings}
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
                <span>({newProduct?.ratingsCount} Reviews)</span>
              </div>
              <h6 className="text-[16px] font-medium pb-2">
                Price: $ {newProduct?.price}
              </h6>
              <h6 className="text-[16px] font-medium pb-2">
                Category: {newProduct?.category}
              </h6>
              <p className="text-[16px] font-medium pb-2">
                Seller: {newProduct?.seller}
              </p>
              <p className="text-[16px] font-medium pb-2">
                In Stock: {newProduct?.stock}
              </p>
              <div className="flex items-center py-5">
                <button
                  onClick={decrement}
                  type="submit"
                  className="px-3 py-2 bg-purple text-white text-[18px] inline-block w-[30px]"
                >
                  -
                </button>
                <input
                  type="text"
                  value={plus}
                  className="py-3 outline-0 px-5 w-[50px]"
                />
                <button
                  onClick={increment}
                  type="submit"
                  className="px-3 py-2 bg-purple text-white text-[18px] inline-block w-[30px]"
                >
                  +
                </button>
              </div>
              <div className="my-5">
                <button className="py-2 px-5 bg-purple text-white rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 bg-gray-100 p-5">
          <div className="flex items-center gap-5">
            <button
              onClick={() => tabToggle(1)}
              className={`px-5 py-2 ${
                tabs === 1 ? "bg-purple text-white" : ""
              } rounded-md`}
            >
              Details
            </button>
            <button
              onClick={() => tabToggle(2)}
              className={`px-5 py-2 ${
                tabs === 2 ? "bg-purple text-white" : ""
              } rounded-md`}
            >
              Reviews
            </button>
          </div>
          <div>
            {tabs === 1 && (
              <p className="p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium laudantium doloribus fuga libero laboriosam animi
                facilis ab, molestiae, explicabo voluptates nisi, tenetur
                placeat expedita earum deserunt vel amet unde ipsa quam
                praesentium at qui. Corrupti aperiam magni odit inventore
                possimus illum, alias quod quisquam voluptatum id rerum porro
                neque earum recusandae atque veniam quos eligendi tenetur
                fugiat. Deleniti blanditiis, assumenda ducimus sapiente saepe
                magnam quia, porro amet animi labore aspernatur iure impedit
                nihil quidem hic vero ut, inventore delectus sit exercitationem?
                Labore totam vel, ut exercitationem fugiat aspernatur modi
                voluptate, sit quisquam deserunt dolore quos officiis cumque
                fuga repellat voluptates.
              </p>
            )}
            {tabs === 2 && (
              <p className="p-5">
                Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium laudantium doloribus fuga libero laboriosam animi
                facilis ab, molestiae, explicabo voluptates nisi, tenetur
                placeat expedita earum deserunt vel amet unde ipsa quam
                praesentium at qui. Corrupti aperiam magni odit inventore
                possimus illum, alias quod quisquam voluptatum id rerum porro
                neque earum recusandae atque veniam quos eligendi tenetur
                fugiat. Deleniti blanditiis, assumenda ducimus sapiente saepe
                magnam quia, porro amet animi labore aspernatur iure impedit
                nihil quidem hic vero ut, inventore delectus sit exercitationem?
                Labore totam vel, ut exercitationem fugiat aspernatur modi
                voluptate, sit quisquam deserunt dolore quos officiis cumque
                fuga repellat voluptates.
              </p>
            )}
          </div>
        </div>
      </Container>
      <div>
        <Container>
          <h4 className="text-[24px] font-semibold pb-2">Related Product</h4>
          <div className="grid lg:grid-cols-4 pb-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {
              relatedProduct.slice(0,8).map((item)=><Card key={item?.id} item={item} />)
            }
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Details;
