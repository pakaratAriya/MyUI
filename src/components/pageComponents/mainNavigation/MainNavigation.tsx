import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { ExampleData } from "../../../routes/ExampleRouter";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          {ExampleData.allPagesData.map((data) => (
            <li className={classes.nav} key={data.id}>
              <NavLink
                to={`/${ExampleData.category}/${data.path}`}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
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
