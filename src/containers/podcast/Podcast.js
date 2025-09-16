import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        {(() => {
          const youTubeEmbeds = podcastSection.podcast.filter(p => /youtube\.com\/embed/.test(p));
          const otherEmbeds = podcastSection.podcast.filter(p => !/youtube\.com\/embed/.test(p));
          return (
            <div className="podcast-vertical">
              {youTubeEmbeds.map((link, idx) => (
                <div key={`yt-${idx}`} className="youtube-wrapper">
                  <iframe
                    className="podcast podcast-youtube large"
                    src={link}
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`podcast-youtube-${idx}`}
                  ></iframe>
                </div>
              ))}
              {otherEmbeds.length > 0 && (
                <div className="other-podcasts">
                  {otherEmbeds.map((link, i) => (
                    <div key={`other-${i}`}>
                      <iframe
                        className="podcast podcast-spotify"
                        src={link}
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title={`podcast-${i}`}
                        style={{borderRadius: "12px"}}
                      ></iframe>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })()}
      </div>
    </Fade>
  );
}
