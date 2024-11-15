import CtaItem from "@components/CtaItem/CtaItem";

import { ctaData } from "../../constants";

import "./Home.css";

const Home = () => {
  return (
    <section className="cta">
      {ctaData.map(
        (
          {
            title,
            isBigTitle,
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
            isBigTitle={isBigTitle}
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
