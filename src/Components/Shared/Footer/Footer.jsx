import React from "react";
import Container from "../../Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-200">
      <Container>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-16">
          <div className="lg:mb-0 mb-5">
            <h4 className="text-[18px] font-semibold pb-5">Help & Contact</h4>
            <div>
              <ul className="space-y-2">
                <li className="text-[14px] font-light">
                  <Link>Your Accounts</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Your Orders</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Shipping Rates</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Returns</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Assistance</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Help</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:mb-0 mb-5">
            <h4 className="text-[18px] font-semibold pb-5">
              Product Categories
            </h4>
            <div>
              <ul className="space-y-2">
                <li className="text-[14px] font-light">
                  <Link>Beauty</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Mans Fashion</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Women Fashion</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Baby Clothes</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Home Decor</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Sports</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Property</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:mb-0 mb-5">
            <h4 className="text-[18px] font-semibold pb-5">Payments Info</h4>
            <div>
              <ul className="space-y-2">
                <li className="text-[14px] font-light">
                  <Link>Business Card</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Paypal</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Online Payments</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Shop with Points</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Cash On delivery</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:mb-0 mb-5">
            <h4 className="text-[18px] font-semibold pb-5">About Us</h4>
            <div>
              <ul className="space-y-2">
                <li className="text-[14px] font-light">
                  <Link>Company Info</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Investors</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>News</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Careers</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Polices</Link>
                </li>
                <li className="text-[14px] font-light">
                  <Link>Reviews</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border border-purple" />
        <div className="text-center py-5">
          <p>Copyright &copy;j-mart all right reserved</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
