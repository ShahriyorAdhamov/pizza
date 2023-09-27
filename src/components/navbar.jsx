import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../scss/navbar/index.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchTxtContainer, searchTxtFunc } from "../slice/search";

function Navbar() {
  const { products } = useSelector((state) => state.products);
  const [searchTxt, setSearchTxt] = useState("");
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTxt) {
      const searchFilter = (searchTxt, products) =>
        products.filter(
          (item) => item.title.toLowerCase().indexOf(searchTxt) > -1
        );
      dispatch(searchTxtContainer(searchFilter(searchTxt, products)));
    }
    dispatch(searchTxtFunc(searchTxt));
  }, [searchTxt, dispatch, products]);

  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar__left">
          <img
            className="logo"
            src="https://www.shutterstock.com/shutterstock/photos/1881274942/display_1500/stock-vector-pizza-logo-creative-pizza-logo-design-1881274942.jpg"
            alt="logo"
          />
        </div>
      </Link>

      <div className="navbar__middle">
        <input
          placeholder="search..."
          type="search"
          className="search-input"
          onChange={(e) => setSearchTxt(e.target.value)}
          value={searchTxt}
        />
      </div>
      <div className="navbar__right">
        <div className="cart-btn" onClick={() => navigate("/cart")}>
          <ShoppingCartIcon style={{ height: 20 }} />
          {cartProducts.length}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
