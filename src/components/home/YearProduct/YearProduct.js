import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <Image
          className="w-full h-full object-cover hidden md:inline-block"
          imgSrc={productOfTheYear}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of The year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            "Denim's Jacket" are timeless fashion staples known for their durability and rugged charm.
            They effortlessly add a casual, cool edge to any outfit, making them versatile enough to pair
            with almost anything in your wardrobe. Available in various washes and styles,
            from classic blue to distressed or embellished versions, denim jackets suit a wide range of personal tastes.          
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
