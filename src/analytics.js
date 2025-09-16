// Lightweight Google Analytics initialization supporting GA4 and optional UA.
// Reads IDs from environment variables (define in a .env file at project root):
//   REACT_APP_GA_ID=<GA4 Measurement ID like G-XXXXXXX>
//   REACT_APP_UA_ID=<Legacy UA property ID like UA-XXXXXXXXX-X> (optional)
// This file dynamically injects the gtag script only when a GA4 ID is present.

export function initAnalytics() {
  const GA4_ID = process.env.REACT_APP_GA_ID;
  if (!GA4_ID) {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.info("[analytics] REACT_APP_GA_ID not set – skipping GA init");
    }
    return;
  }

  // Avoid double insertion
  if (window.__GA_INITIALIZED__) return;

  // Inject the gtag script tag
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  } // eslint-disable-line
  // Expose for debugging
  window.gtag = gtag; // eslint-disable-line
  gtag("js", new Date());
  gtag("config", GA4_ID);

  const legacyUA = process.env.REACT_APP_UA_ID || "UA-135618960-2";
  if (legacyUA) {
    gtag("config", legacyUA);
  }

  window.__GA_INITIALIZED__ = true;
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.info(
      `[analytics] Initialized GA4 (${GA4_ID})` +
        (legacyUA ? ` + UA (${legacyUA})` : "")
    );
  }
}
