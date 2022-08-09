import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li></li>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
              {/* <Welcome /> */}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              {/* <Products /> */} Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
