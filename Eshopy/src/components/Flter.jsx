import React from "react";
import { UseFiltercontext } from "../context/Filtercontext";
import { all } from "axios";
const Filter = () => {
  const {
    filter: { text, category, companys },
    handlechange,
    allproducts,
  } = UseFiltercontext();
  const getallcategory = (products) => {
    let new_val = products.map((curr) => {
      return curr.name;
    });
    return [...new Set(new_val)];
  };
  const getallcompany = (products) => {
    let new_comp = products.map((curr) => {
      return curr.company;
    });
    return [...new Set(new_comp)];
  };

  const company = getallcompany(allproducts);

  const Category = getallcategory(allproducts);
  return (
    <>
      <section className="container  text-left">
        <input
          id="name"
          type="text"
          name="text"
          placeholder="Search the result"
          className="p-1"
          value={text}
          onChange={handlechange}
        />
        <div className="mt-1">
          <h5>Category</h5>
          {Category.map((p, index) => {
            return (
              <p key={index}>
                <button
                  className="button-33 "
                  role="button"
                  type="button"
                  name="category"
                  value={p}
                  onClick={handlechange}
                >
                  {p}
                </button>
                <br />{" "}
              </p>
            );
          })}
          <h3>Category</h3>
          <h5>
            <select name="companys" onChange={handlechange}>
              {company.map((curr) => {
                return (
                  <option key={curr} value={curr}>
                    {curr}
                  </option>
                );
              })}
            </select>
          </h5>
        </div>
      </section>
    </>
  );
};
export default Filter;
