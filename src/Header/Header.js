import React from "react";
import Logo from "../assets/robinhood.svg";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

function Header() {
  return (
    <div className="header__container">
      <div className="header__logo">
        <img src={Logo} width={25} alt="robinhood logo" />
      </div>

      <div className="header__search">
        <div className="header__searchBox">
          {/* <SearchIcon style={{ color: "white" }} /> */}
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
