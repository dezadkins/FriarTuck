import React from "react";
import Logo from "../assets/robinhood.svg";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header__container">
      {/* logo */}
      <div className="header__logo">
        <img src={Logo} width={25} alt="robinhood logo" />
      </div>
      {/* search */}
      <div className="header__search">
        <div className="header__searchBox">
          <SearchIcon style={{ color: "white" }} />
        </div>
      </div>
      {/* menuitems */}
      <div className="header__menu"></div>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
