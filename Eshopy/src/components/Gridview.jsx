import React from "react";
import Cards from "./Cards";

const Gridview = ({ products }) => {
  // Function to chunk the products array into arrays of three items each
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Chunk the products array
  const productChunks = chunkArray(products, 3);

  return (
    <div className="container">
      {productChunks.map((chunk, index) => (
        <div className="row" key={index}>
          {chunk.map((product, id) => (
            <div className="col-md-4" key={id}>
              <Cards product={product} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gridview;
