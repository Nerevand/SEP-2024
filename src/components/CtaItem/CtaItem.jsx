import { Typography } from "@mui/material";

import cn from "classnames";

import Btn from "@components/Btn/Btn";
import CtaImage from "./CtaImage/CtaImage";

import "./CtaItem.css";

const CtaItem = ({
  title,
  isBigTitle,
  description,
  listDescription,
  listItems,
  isBtnBig,
  btnText,
  imgSrcSet,
  imgSrc,
  altText,
}) => {
  return (
    <article className="cta-item">
      <div className="cta-item-text-content">
        <Typography variant={isBigTitle ? "h1" : "h2"}>{title}</Typography>
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

export default CtaItem;
