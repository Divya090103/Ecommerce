import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
const Rating = ({ stars, review }) => {
  const starIconMap = Array.from({ length: 5 }, (elem, ind) => {
    let number = ind + 0.5;
    return (
      <span key={ind}>
        {stars >= ind + 1 ? (
          <FaStar className="text-warning" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-warning" />
        ) : (
          <IoStarOutline className="text-warning" />
        )}
      </span>
    );
  });
  console.log(stars);
  return (
    <>
      {starIconMap}
      <p>({review} reviews)</p>
    </>
  );
};
export default Rating;
