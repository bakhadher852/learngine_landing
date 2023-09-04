import React from "react";

const ImgIcon = ({ className, src }) => {
  return (
    <>
      <img className={className} src={src} alt="Icons" />
    </>
  );
};

export default ImgIcon;
