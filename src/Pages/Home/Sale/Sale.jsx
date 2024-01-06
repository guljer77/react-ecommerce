import React from "react";
import Container from "../../../Components/Container";
import Sale1 from "../../../assets/card/banner1.jpg";
import Sale2 from "../../../assets/card/banner2.jpg";
import { Link } from "react-router-dom";

function Sale() {
  return (
    <div className="py-10">
      <Container>
        <div className="lg:flex items-center justify-between gap-5">
          <div className="lg:w-2/4 w-full lg:mb-0 mb-5">
            <div className="absolute">
              <div className="flex items-center justify-start pl-10 w-full h-[250px]">
                <div>
                  <h4 className="text-[16px] font-semibold">Brutal Sale</h4>
                  <h6 className="text-[18px] font-medium text-gray-600">
                    Get the deal in here
                  </h6>
                  <h3 className="text-[22px] uppercase font-semibold">
                    Living Room Chair
                  </h3>
                  <Link className="px-3 py-2 mt-3 inline-block rounded-full bg-purple text-white">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <img src={Sale1} alt="" className="w-full h-[250px]" />
          </div>
          <div className="lg:w-2/4 w-full">
            <div className="absolute">
              <div className="flex items-center justify-start pl-10 w-full h-[250px]">
                <div>
                  <h4 className="text-[16px] font-semibold">Brutal Sale</h4>
                  <h6 className="text-[18px] font-medium text-gray-600">
                    Get the deal in here
                  </h6>
                  <h3 className="text-[22px] uppercase font-semibold">
                    Office Outfit
                  </h3>
                  <Link className="px-3 py-2 mt-3 inline-block rounded-full bg-purple text-white">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <img src={Sale2} alt="" className="w-full h-[250px]" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Sale;
