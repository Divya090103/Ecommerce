import React, { useState } from "react";
const MyImage = ({ myimage }) => {
  // console.log(myimage);
  const [state, setstate] = useState(myimage[0]);

  return (
    <>
      <div className="d-flex row row-img">
        <div className="col-lg-4">
          {myimage.map((curr, ind) => {
            return (
              <figure>
                <img src={curr} key={ind} onClick={() => setstate(curr)} />
              </figure>
            );
          })}
        </div>
        <div className=" col-lg-8 mt-5">
          <img src={state} className="main-img"></img>
        </div>
      </div>
    </>
  );
};
export default MyImage;
