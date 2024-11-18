import { ctaData } from "@constants";
import CtaItem from "@components/CtaItem";

import "./style.css";

const Home = () => {
  return (
    <section className="cta">
      {ctaData.map(
        (
          {
            title,
            titleVariant,
            description,
            listItems,
            listDescription,
            btnText,
            isBtnBig,
            imgSrcSet,
            imgSrc,
            altText,
          },
          index
        ) => (
          <CtaItem
            key={index}
            title={title}
            titleVariant={titleVariant}
            description={description}
            listItems={listItems}
            listDescription={listDescription}
            btnText={btnText}
            isBtnBig={isBtnBig}
            imgSrcSet={imgSrcSet}
            imgSrc={imgSrc}
            altText={altText}
          />
        )
      )}
    </section>
  );
};

export default Home;
