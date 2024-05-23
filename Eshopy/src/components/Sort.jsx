import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { UseFiltercontext } from "../context/Filtercontext";
const Sort = () => {
  const { gridview,setgridview,setlistview } = UseFiltercontext();
  console.log(gridview);
 
  return (
    <>
      <div className="container d-flex justify-content-between">
        <div>
          <button className={gridview ? "actives button-17 fs-2" : "button-17"} onClick={setgridview}>
            <BsGrid3X3GapFill />
          </button>
          &nbsp;
          <button className={gridview ? "button-17" : "actives button-17 fs-5"} onClick={setlistview}>
            <FaList />
          </button>
        </div>
        <div>no.of products</div>
        <div>list pf products</div>
      </div>
    </>
  );
};
export default Sort;
