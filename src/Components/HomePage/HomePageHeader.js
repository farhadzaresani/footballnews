import React, { useState } from "react";
import SearchIcon from "../../assets/svg/SearchIcon";

function HomePageHeader() {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="homeTopBar">
      <img src="/image/logo.png"></img>
      <div className="searchBtn">
        <div
          className="cursor-pointer"
          onClick={() => setShowInput(!showInput)}
        >
          <SearchIcon />
        </div>
        {showInput ? <input /> : null}
      </div>
    </div>
  );
}

export default HomePageHeader;
