import React from "react";

const Checkbox = ({ value }) => {
  const image = value
    ? require("../../static/ic_btn_checkbox_24x24_sel_yellow.png")
    : require("../../static/ic_btn_checkbox_24x24_nor_grey.png");

  return <img src={image} className="checkbox" alt="checkboxImage" />;
};

export default Checkbox;
