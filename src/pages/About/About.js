import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
        <span className="text-primeColor font-semibold text-lg">THE JACKET VERSE</span>{" "}
        is a company revolutionizing the fashion industry with its innovative approach to outerwear. Specializing in new style jackets, The Jacket Verse seamlessly blends contemporary design with functional elegance. Each piece in their collection is meticulously crafted to cater to the modern individual who values both aesthetics and practicality. From urban streetwear to sophisticated, tailored designs, The Jacket Verse offers a diverse range of styles that ensure there's a perfect jacket for every occasion and personality. Their commitment to quality is evident in the premium materials and meticulous craftsmanship used in each jacket, making them not just fashion statements, but enduring wardrobe staples.
      </h1>

{/* Break */}
<div className="my-4" />

<h1 className="max-w-[600px] text-base text-lightText mb-2">
  What sets The Jacket Verse apart is their dedication to sustainability and ethical production practices. Understanding the environmental impact of fashion, they prioritize eco-friendly materials and transparent manufacturing processes. The company's innovative use of recycled fabrics and sustainable dyes underscores their commitment to reducing their carbon footprint while still delivering high-quality, stylish products. Additionally, The Jacket Verse engages in fair labor practices, ensuring that every worker involved in the production process is treated with respect and provided fair wages. This holistic approach not only positions The Jacket Verse as a leader in contemporary fashion but also as a brand with a conscience, appealing to consumers who are increasingly mindful of their environmental and social impact.
</h1>

        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
