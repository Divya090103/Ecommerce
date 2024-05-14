import React, { useContext } from "react";
import { Appcontext } from "../context/Productcontext";
import { NavLink } from "react-router-dom";
const PageNavigation = () => {
  const { singleproduct } = useContext(Appcontext);
  return (
    <>
      <div className="page-navigation">
        <NavLink to="/" className="fs-3 text-dark text-decoration-none">
          HOME/ {singleproduct?.name}
        </NavLink>
      </div>
    </>
  );
};
export default PageNavigation;
