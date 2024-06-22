import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">THE JACKET VERSE</span>{" "}<br/><br/>
          Day 1: Discovering The Jacket Verse<br/><br/>

          Today, I stumbled upon The Jacket Verse, a company that promises to redefine my wardrobe with its stylish and functional outerwear. Their innovative approach to fashion immediately caught my eye—specializing in new style jackets that seamlessly blend contemporary design with practical elegance. Each piece seems meticulously crafted, catering perfectly to both aesthetic appeal and everyday usability. From trendy urban streetwear to sophisticated, tailored designs, The Jacket Verse offers a diverse range that promises something for every occasion and personality. What struck me most was their commitment to quality; the materials used and craftsmanship showcased in their jackets speak volumes about their dedication to excellence.<br/><br/>

          Day 2: Exploring Sustainability and Ethics<br/><br/>

          Diving deeper into The Jacket Verse, I discovered their unwavering commitment to sustainability and ethical production practices. They prioritize eco-friendly materials and maintain transparent manufacturing processes, aiming to minimize their environmental footprint. Their use of recycled fabrics and sustainable dyes not only underscores their environmental consciousness but also highlights their dedication to creating high-quality, stylish products without compromising on ethics. Learning about their fair labor practices was equally reassuring; knowing that every worker involved in the production process is treated with respect and provided fair wages adds a layer of integrity to their brand. The Jacket Verse isn't just about fashion; it's about making responsible choices that resonate with mindful consumers like myself, who value both style and sustainability.<br/><br/>

          Day 3: The Jacket Verse in Perspective<br/><br/>

          Reflecting on my experience with The Jacket Verse, I realize it's more than just a fashion brand—it's a statement. Their commitment to innovation, quality, sustainability, and ethical practices sets them apart in an industry often criticized for its environmental and social impacts. Their jackets aren't merely garments; they're pieces of art meticulously designed to enhance both style and comfort. Exploring their collections has been an enlightening journey, offering me not just a new addition to my wardrobe but a new perspective on how fashion can be both stylish and conscientious. As I continue to wear their jackets, I feel like I'm not just dressing up; I'm making a choice to support a brand that aligns with my values of sustainability and ethical responsibility. The Jacket Verse has not only impressed me with their products but has also inspired me to consider the impact of my choices as a consumer.
        </h1><br/><br/>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
