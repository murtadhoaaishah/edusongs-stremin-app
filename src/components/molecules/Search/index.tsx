// "use client"
import { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [isClose, setIsClose] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div>
      {isClose ? (
        <div className="search">
          {" "}
          <img src="/vectors/search.svg" alt="search" />{" "}
          <div className="search-input">
            <input
              type="text"
              placeholder="Search"
              className="search-input_input"
              onChange={(e) => setInput(e.target.value)}
            />
            <img
              onClick={() => setIsClose(false)}
              src="/vectors/close.svg"
              alt="close"
            />
          </div>
        </div>
      ) : (
        <img
          onClick={() => setIsClose(true)}
          src="/vectors/search.svg"
          alt="search"
        />
      )}
    </div>
  );
};

export default Search;
