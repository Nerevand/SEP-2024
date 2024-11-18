import PropTypes from "prop-types";

import "./style.css";

const CtaImage = ({
  imgSrcSet,
  imgSrc,
  altText = "Image could not be loaded.",
}) => {
  return (
    <div className="cta-image">
      <picture>
        <source media="(min-width: 900px)" srcSet={imgSrcSet} />
        <img src={imgSrc} alt={altText} />
      </picture>
    </div>
  );
};

CtaImage.propTypes = {
  imgSrcSet: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default CtaImage;
