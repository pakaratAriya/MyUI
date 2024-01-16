import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { ExampleData } from "../../../routes/ExampleRouter";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul className={classes.mainNavUl}>
          {ExampleData.allPagesData.map((data) => (
            <li className={classes.nav} key={data.id}>
              <NavLink
                to={`/${ExampleData.category}/${data.path}`}
                className={({ isActive }) =>
                  isActive
                    ? `${classes.mainNavA} ${classes.active}`
                    : classes.mainNavA
                }
              >
                {data.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
