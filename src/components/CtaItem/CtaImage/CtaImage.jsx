import "./style.css";

const CtaImage = ({ imgSrcSet, imgSrc, altText }) => {
  return (
    <div className="cta-image">
      <picture>
        <source media="(min-width: 900px)" srcSet={imgSrcSet} />
        <img src={imgSrc} alt={altText} />
      </picture>
    </div>
  );
};

export default CtaImage;
