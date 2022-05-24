import React from "react";

const Item = (props) => {
  const { description, type, itemImage } = props;

  return (
    <div className="main">
      <div
        className="output-item"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <div>{type}</div>
        <div>{description}</div>
        <div>
          <img
            src={itemImage}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
