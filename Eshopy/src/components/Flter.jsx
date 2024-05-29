import React from "react";
import { UseFiltercontext } from "../context/Filtercontext";
const Filter = () => {
  const {
    filter: { text },
    handlechange,
  } = UseFiltercontext();

  return (
    <>
      <section>
        <input
          id="name"
          type="text"
          name="text"
          placeholder="Search the result"
          className="p-1"
          value={text}
          onChange={handlechange}
        />
      </section>
    </>
  );
};
export default Filter;
