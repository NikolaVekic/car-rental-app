/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { fetchCars } from "./utils/index";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CarCard from "./components/CarCard";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import CustomFilter from "./components/CustomFilter";
import { fuels, yearsOfProduction } from "./constants";

const App = () => {
  const [cars, setCars] = useState(null);
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [manufacturer, setManufacturer] = useState("Mercedes-Benz");
  const [model, setModel] = useState("");

  // Car search
  const handleSearch = async ({ manufacturer, model }) => {
    const limit = 8; // Default limit
    const searchCars = await fetchCars({
      manufacturer,
      year,
      model,
      limit,
      fuel,
    });
    setCars(
      !Array.isArray(searchCars) || searchCars.length < 1 ? null : searchCars
    );
  };

  // Default car display
  useEffect(() => {
    handleSearch({ manufacturer, model });
  }, [fuel, year, manufacturer, model]);

  const handleYear = (option) => {
    setYear(option.title);
    console.log(option.title);
  };

  const handleFuel = (option) => {
    setFuel(option.title);
    console.log(option.title);
  };

  const handleOption = (searchOne, searchTwo) => {
    setManufacturer(searchOne);
    setModel(searchTwo);
    console.log(manufacturer);
    console.log(model);
  };

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <div
          className="mt-24 mb-36 padding-x padding-y max-width"
          id="discover"
        >
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>
          <div className="home__filters">
            <SearchBar onSearch={handleSearch} handleOption={handleOption} />
            <div className="home__filter-container">
              <CustomFilter
                title="fuel"
                options={fuels}
                onFilter={handleFuel}
              />
              <CustomFilter
                title="year"
                options={yearsOfProduction}
                onFilter={handleYear}
              />
            </div>
          </div>
          {cars === null ? (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Opps. no results</h2>
            </div>
          ) : (
            <section>
              <div className="home__cars-wrapper">
                {cars?.map((car, index) => (
                  <CarCard key={index} car={car} />
                ))}
              </div>
            </section>
          )}
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
