import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import cn from "classnames";

import Btn from "@ui/Btn";

import CtaImage from "./CtaImage";

import "./style.css";

const CtaItem = ({
  title,
  titleVariant = "h2",
  description = "",
  listDescription,
  listItems = [],
  isBtnBig = false,
  btnText,
  imgSrcSet,
  imgSrc,
  altText = "Image could not be loaded.",
}) => {
  return (
    <article className="cta-item">
      <div className="cta-item-text-content">
        <Typography variant={titleVariant}>{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        {listItems && (
          <>
            <Typography variant="body1">{listDescription}</Typography>
            <ul className="cta-list">
              {listItems.map((item, index) => (
                <li key={index} className="cta-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
        <Btn className={cn({ "btn-large": isBtnBig })}>{btnText}</Btn>
      </div>
      <CtaImage imgSrcSet={imgSrcSet} imgSrc={imgSrc} altText={altText} />
    </article>
  );
};

CtaItem.propTypes = {
  title: PropTypes.string.isRequired,
  isBigTitle: PropTypes.bool,
  description: PropTypes.string.isRequired,
  listDescription: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string),
  isBtnBig: PropTypes.bool,
  btnText: PropTypes.string.isRequired,
  imgSrcSet: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  variant: PropTypes.oneOf(["h1", "h2"]),
};

export default CtaItem;
