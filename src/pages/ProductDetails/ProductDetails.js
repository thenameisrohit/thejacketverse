import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import { FaDownload } from "react-icons/fa";

const tabs = [
  {
    id: "Fiche Technique",
    label: "Fiche Technique",
  },
  {
    id: "Description",
    label: "Description",
    content:
      <p>"TheJacketVerse is not just a destination for outerwear; it's a narrative of style and substance woven into every stitch.
        We curate a diverse collection of jackets that transcend trends, offering timeless classics and contemporary designs that speak
        to individuality and confidence. From sleek leather bombers to cozy parkas, each piece at TheJacketVerse is meticulously selected
        for its quality and craftsmanship. Our commitment to excellence ensures that every jacket meets the highest standards of comfort,
        durability, and style.
        Embracing the essence of versatility, TheJacketVerse celebrates the art of layering and accessorizing, allowing
        you to create unique looks for any occasion. Whether you're exploring city streets or venturing into the great outdoors, our jackets
        are designed to complement your lifestyle with effortless elegance. Beyond fashion, TheJacketVerse is a symbol of innovation and sustainability.
        We strive to minimize our environmental footprint by partnering with ethical suppliers and using eco-friendly materials whenever possible.
        Driven by a passion for perfection, we constantly evolve our collection to reflect the latest trends and customer preferences.
        Our customer-centric approach ensures a seamless shopping experience, supported by personalized service and expert advice.
        At TheJacketVerse, we believe in the power of self-expression through fashion. Each jacket tells a story—yours. Join us in crafting your
        narrative with style, quality, and a touch of inspiration from TheJacketVerse."</p>,
  },
  
];

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo.ficheTech]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full "
              src={productInfo.img}
              alt={productInfo.img}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
        <div>
          <div className=" space-x-4  pt-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } py-2 px-4  focus:outline-none`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="my-4">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={activeTab === tab.id ? "" : "hidden"}
              >
                {tab.id === "Fiche Technique" && productInfo.ficheTech ? (
                  <div>
                    <table className="table-auto w-full">
                      <tbody>
                        {productInfo.ficheTech.map((row) => (
                          <tr key={row.label} className="bg-gray-100">
                            <td className="border px-4 py-2 font-semibold">
                              {row.label}
                            </td>
                            <td className="border px-4 py-2">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="my-4 flex justify-end">
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-500 hover:bg-blue-600 text-white font-bodyFont">
                        <FaDownload className="h-5 w-5 mr-2 text-white" />
                        <a
                          href={productInfo.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                        >
                          Download PDF
                        </a>{" "}
                      </button>
                    </div>
                  </div>
                ) : (
                  <p>{tab.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
