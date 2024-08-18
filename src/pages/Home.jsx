import React, { useEffect, useState } from "react";
import AutoPlayingSlider from "../Components/Slider/AutoPlayingSlider";
import ImageSlider from "../Components/Slider/ImageSlider";
import { handelApi } from "../JS/handelApi";
const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
};
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const labtops = await handelApi.getallData("products/category/laptops");
        const mensShoes = await handelApi.getallData(
          "products/category/mens-shoes"
        );
        const mensWatches = await handelApi.getallData(
          "products/category/tops"
        );

        // Combine all the data into one array
        const combinedProducts = [...labtops, ...mensShoes, ...mensWatches];

        // Shuffle the combined array
        const shuffledProducts = shuffleArray(combinedProducts);

        // Set the shuffled products to state
        setProducts(shuffledProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-[600px] w-screen m-auto py-20 relative group">
        <AutoPlayingSlider />
      </div>
      <div className="pb-10">
        <ImageSlider images={products} direction={"right"} />
      </div>
    </>
  );
}

export default Home;
