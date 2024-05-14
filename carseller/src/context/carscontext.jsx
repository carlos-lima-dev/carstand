import React, {createContext, useState, useEffect} from "react";

export const CarsContext = createContext();

export const CarsProvider = ({children}) => {
  const [carData, setCarData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCarData() {
      try {
        // Fetch the car data from the API
        const response = await fetch("/api/cars.json");

        if (!response.ok) {
          throw new Error("Failed to fetch car data");
        }

        // Parse the JSON response
        const data = await response.json();
        setCarData(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchCarData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  useEffect(() => {
    console.log(carData);
  }, [carData]);

  return (
    <CarsContext.Provider
      value={{
        carData,
        scrollToTop,
        error,
      }}>
      {children}
    </CarsContext.Provider>
  );
};
