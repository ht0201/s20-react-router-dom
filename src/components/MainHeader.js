import { Link, NavLink } from 'react-router-dom';
import Products from '../pages/Products';
import Welcome from '../pages/Welcome';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='./welcome'>
              Welcome
              {/* <Welcome /> */}
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to='./products'>
              {/* <Products /> */} Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
