import React from "react";

const Header = ({ navValue }) => {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">{!navValue ? "About" : navValue}</a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
