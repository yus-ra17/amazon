import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { TfiLocationPin } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";

import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from "react";
import flag from "../../../../prop-images/flag.jpg";
import { auth } from "../../Utility/FireBase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  // console.log(basket.length);

  return (
    <section className={classes.fixed}>
      <section>
        <section className={classes.header_container}>
          {/* left side link start */}
          <div>
            <div className={classes.logo_container}>
              {/* {logo} */}
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon log"
                />
              </Link>

              {/* {delivery} */}
              <div className={classes.delivery}>
                <span>
                  <TfiLocationPin />
                </span>

                <div>
                  <p>Deliverd to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
          </div>

          {/* left side link end */}

          {/* middle part start */}
          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="" />
            {/* icon */}
            <GoSearch size={38} className="icon" />
          </div>
          {/* middle part end */}
          {/* right side link start */}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              {" "}
              <img src={flag} alt="" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link to={!user && "/auth"}>
              <div className={classes.sign}>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>

              {/* <span>Account & Lists</span> */}
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <div className={classes.last}>
              <Link to="/cart" className={classes.cart}>
                {/* icon */}
                <FiShoppingCart size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
          {/* right side link end */}
        </section>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
