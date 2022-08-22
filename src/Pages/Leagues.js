import React from "react";
import { SearchNormal1 } from "iconsax-react";
import SearchIcon from "../assets/svg/SearchIcon";

export default function Leagues() {
  //   const searchIcon = <SearchNormal1 size="32" color="#FF8A65" />;
  return (
    <div className="  mt-3 flex flex-col">
      <div className="searchInput ">
        <div className="">
          <SearchIcon />
        </div>
        <input className=" " placeholder={"Search..."} />
      </div>

      <div className="mx-auto mt-5 w-[90vw] lg:w-[70vw]  ">
        <div className="leagueItem">
          <h1>Laliga</h1>
          <img src={"/Image/laliga.png"} />
        </div>
        <div className="leagueItem">
          <h1>UEFA</h1>
          <img src={"/Image/uefa.png"} />
        </div>
        <div className="leagueItem">
          <h1>Laliga</h1>
          <img src={"/Image/laliga.png"} />
        </div>
        <div className="leagueItem">
          <h1>UEFA</h1>
          <img src={"/Image/uefa.png"} />
        </div>
        <div className="leagueItem">
          <h1>Laliga</h1>
          <img src={"/Image/laliga.png"} />
        </div>
        <div className="leagueItem">
          <h1>UEFA</h1>
          <img src={"/Image/uefa.png"} />
        </div>
      </div>
    </div>
  );
}
