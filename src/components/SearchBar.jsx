"use client";
import { useState } from "react";
// onSubmit is a browser event, react import is transformed to "use client"
import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ otherClasses }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <img
      src="/assets/search.svg"
      alt="magnifying glass"
      className="object-contain max-h-[25px] max-w-[25px] ml-6"
    />
  </button>
);

const SearchBar = ({ onSearch, handleOption }) => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ manufacturer, model });
    handleOption(manufacturer, model);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          handleOption={handleOption}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Car Model"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
