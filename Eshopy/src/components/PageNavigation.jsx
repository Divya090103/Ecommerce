import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
const PageNavigation = ({ name }) => {
  console.log(name);

  return (
    <>
      <div className="page-navigation">
        <NavLink to="/" className="fs-3 text-dark text-decoration-none">
          HOME
        </NavLink>
        /{name}
      </div>
    </>
  );
};
export default PageNavigation;
