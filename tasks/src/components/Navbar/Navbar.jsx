import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="block">
        <ul>
          <li>
            <a href="">Главная</a>
          </li>
          <li>
            <a href="">О компании</a>
          </li>
          <li>
            <a href="">Катaлог</a>
          </li>
          <li>
            <a href="">Оптовикам</a>
          </li>
          <li>
            <a href="">Доставка</a>
          </li>
          <li>
            <a href="">Оплата</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
