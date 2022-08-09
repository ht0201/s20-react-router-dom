import { Link } from 'react-router-dom';
import Products from '../pages/Products';
import Welcome from '../pages/Welcome';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to='./welcome'>
              Welcome
              {/* <Welcome /> */}
            </Link>
          </li>

          <li>
            <Link to='./products'>{/* <Products /> */} Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
