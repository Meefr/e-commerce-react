import { useEffect, useState } from "react";

export default function useLocalStorage(key, customeData) {
  const [data, setData] = useState(() => {
    const localStorageData = JSON.parse(localStorage.getItem(key));
    return localStorageData || customeData;
  });
  
  useEffect(() => {
    console.log(customeData);
    
      if (customeData !== null) {
        localStorage.setItem(key, JSON.stringify(customeData));
      }
    setData(customeData);
  }, [customeData]);

  return data;
}
