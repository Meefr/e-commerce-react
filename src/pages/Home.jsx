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
const fetchDataFromApiOrLocalStorage = async (
  item1,
  item2,
  item3,
  storageKey,
  func
) => {
  try {
    const storedData = localStorage.getItem(storageKey);

    if (storedData) {
      // Use stored data if available
      func(JSON.parse(storedData));
    } else {
      // Fetch data from API if not available in local storage
      const i1 = await handelApi.getallData(`products/category/${item1}`);
      const i2 = await handelApi.getallData(`products/category/${item2}`);
      const i3 = await handelApi.getallData(`products/category/${item3}`);

      // Combine all the data into one array
      const combinedProducts = [...i1, ...i2, ...i3];

      // Shuffle the combined array
      const shuffledProducts = shuffleArray(combinedProducts);

      // Store the shuffled products in local storage
      localStorage.setItem(storageKey, JSON.stringify(shuffledProducts));

      // Set the shuffled products to state
      func(shuffledProducts);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
function Home() {
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [products3, setProducts3] = useState([]);

  useEffect(() => {
    fetchDataFromApiOrLocalStorage(
      "labtops",
      "mobile-accessories",
      "mens-watches",
      "products1",
      setProducts1
    );
    fetchDataFromApiOrLocalStorage(
      "mens-shirts",
      "tops",
      "mens-shoes",
      "products2",
      setProducts2
    );
    fetchDataFromApiOrLocalStorage(
      "kitchen-accessories",
      "skin-care",
      "womens-shoes",
      "products3",
      setProducts3
    );
  }, []);

  return (
    <>
      <div className="h-[600px] w-screen m-auto py-20 relative group">
        <AutoPlayingSlider />
      </div>
      <div className="pb-10">
        <ImageSlider images={products1} direction={"right"} />
      </div>
      <div className="pb-10">
        <ImageSlider images={products2} direction={"left"} />
      </div>
      <div className="pb-10">
        <ImageSlider images={products3} direction={"right"} />
      </div>
    </>
  );
}

export default Home;
