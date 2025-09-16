import React, {useContext} from "react";
import "./Certification.scss";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import {certificationSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Certification() {
  const {isDark} = useContext(StyleContext);
  if (!certificationSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="certifications">
        <div className="certification-main-div">
          <div className="certification-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading certification-heading"
                  : "heading certification-heading"
              }
            >
              {certificationSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle certification-subtitle"
                  : "subTitle certification-subtitle"
              }
            >
              {certificationSection.subtitle}
            </p>
          </div>
          <div className="certification-cards-div">
            {certificationSection.certificationCards.map((card, i) => (
              <CertificationCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
