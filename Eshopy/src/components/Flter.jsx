import React from "react";
import { UseFiltercontext } from "../context/Filtercontext";
import { all } from "axios";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
const Filter = () => {
  const {
    filter: { text, category, companys, minprice, maxprice, price },
    handlechange,
    allproducts,
    clearfilter,
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
  const getallcolor = (products) => {
    // Extract colors arrays from each product and flatten the result into a single array
    const allColors = products.map((product) => product.colors).flat();

    // Create a Set from the flattened array to remove duplicates
    let uniqueColors = new Set();
    uniqueColors.add("All");
    allColors.forEach((element) => {
      uniqueColors.add(element);
    });

    return [...uniqueColors];
  };
  const getallprice = (product) => {
    const allprice = product.map((curr) => {
      return curr.price;
    });

    return [...new Set(allprice)];
  };

  const colors = getallcolor(allproducts);

  const company = getallcompany(allproducts);
  const pricearr = getallprice(allproducts);
  const maxi = Math.max(...pricearr);

  const Category = getallcategory(allproducts);
  const [colr, setcolor] = useState();
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
                  className="button-33"
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
          <h5 className="mt-1">Company</h5>
          <h5>
            <select name="companys" onChange={handlechange}>
              <option>ALL</option>
              {company.map((curr) => {
                return (
                  <option key={curr} value={curr}>
                    {curr}
                  </option>
                );
              })}
            </select>
          </h5>
          <h5 className="mt-1">Colors:</h5>

          {colors.map((color, ing) => {
            if (color === "All") {
              return (
                <button
                  key={ing}
                  onClick={() => {
                    setcolor("");
                  }}
                  className="none"
                >
                  All:
                </button>
              );
            }
            return (
              <button
                key={ing}
                className={colr === color ? "ms-1 active" : "ms-1"}
                style={{
                  backgroundColor: color,
                  borderRadius: 100,
                  width: 18,
                  height: 18,
                }}
                onClick={() => {
                  setcolor(color);
                }}
              >
                {colr === color ? <FaCheck className="text-warning" /> : null}
              </button>
            );
          })}
          <div>
            <h5 className="mt-2">Price : {price}</h5>
            <input
              type="range"
              onChange={handlechange}
              min={minprice}
              max={maxi}
              value={price}
              name="price"
            />
          </div>
          <button
            type="button"
            onClick={clearfilter}
            className="button-29 mt-2"
          >
            Clear Filter
          </button>
        </div>
      </section>
    </>
  );
};
export default Filter;
