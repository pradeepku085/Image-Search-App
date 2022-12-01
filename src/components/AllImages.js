import React from "react";

function AllImages({ res }) {
  return (
    <div className="allImage">
      {res.map((val) => {
        return (
          <>
            <img
              key={val.id}
              className="image"
              src={val.urls.small}
              alt="val.alt_description"
            />
          </>
        );
      })}
    </div>
  );
}

export default AllImages;
