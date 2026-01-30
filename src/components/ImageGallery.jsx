import React from "react";
import PropTypes from "prop-types";

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`Image ${index + 1}`}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
