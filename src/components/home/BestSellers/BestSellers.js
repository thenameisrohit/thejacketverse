import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Cotton Jacket"
          price="479.00"
          color="Yellow"
          badge={true}
          des="Cotton jackets are renowned for their comfort and breathability, making them perfect for year-round wear. Their lightweight nature makes them ideal for layering in cooler weather or wearing alone during warmer months. Available in various styles, from casual to semi-formal, cotton jackets can easily adapt to different occasions and outfits. They come in a wide range of colors and patterns, allowing for versatility and personalization in your wardrobe. Additionally, cotton jackets are easy to care for and durable, ensuring they remain a staple in your closet for years to come."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Demin Jacket"
          price="409.00"
          color="Blue"
          badge={false}
          des="Denim jackets are timeless fashion staples known for their durability and rugged charm. They effortlessly add a casual, cool edge to any outfit, making them versatile enough to pair with almost anything in your wardrobe. Available in various washes and styles, from classic blue to distressed or embellished versions, denim jackets suit a wide range of personal tastes. Ideal for layering, they are perfect for transitional seasons, providing just the right amount of warmth. Additionally, denim jackets are low-maintenance and tend to look better with age, adding to their enduring appeal."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Bomber Jacket Mockup"
          price="429.00"
          color="Mixed"
          badge={true}
          des="Bomber jackets, known for their distinctive, military-inspired style, offer a sleek and versatile addition to any wardrobe. Their snug fit and ribbed cuffs and hem provide both comfort and a sharp silhouette, perfect for casual and semi-formal occasions. Available in various materials like nylon, leather, and suede, bomber jackets come in a range of colors and designs, catering to diverse fashion preferences. Ideal for layering, they work well in cooler weather while adding an element of cool sophistication. Easy to pair with jeans, chinos, or even dresses, bomber jackets remain a trendy and functional outerwear choice."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Neon Jacket"
          price="499.00"
          color="Neon"
          badge={false}
          des="Neon jackets make a bold statement with their vibrant hues, instantly adding a playful and energetic touch to any ensemble. Ideal for standing out in crowds or low-light conditions, their eye-catching colors ensure visibility and style. Whether in classic bomber styles or modern cuts, neon jackets offer versatility for both casual outings and nighttime adventures. Pairing effortlessly with neutral tones or contrasting shades, they infuse outfits with a youthful and fashion-forward vibe. Perfect for adding a pop of personality to your wardrobe, neon jackets are a must-have for those who love to make a statement."
        />
      </div>
    </div>
  );
};

export default BestSellers;
