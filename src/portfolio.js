/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tholupunoori Raviteja",
  title: "Hi, I'm Raviteja",
  subTitle: emoji(
    "Senior Data / Product Engineer with 9+ years designing and building cloud-native data & identity resolution platforms. Expert in Apache Spark, Airflow, Talend, and modern data lake / warehouse patterns across GCP, Azure & AWS. Passionate about performance tuning, scalable ETL, and enabling Customer Data Platforms (CDP)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1tAQKUdgUVL2agwEU3uhqqUiJAkyh6A5g/view?usp=sharing", // TODO: add public resume link
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/traviteja-git",
  linkedin: "https://www.linkedin.com/in/traviteja/",
  gmail: "raviteja0096@gmail.com",
  medium: "https://medium.com/@raviteja0096",
  instagram: "https://www.instagram.com/this.raviteja",
  // add more if desired e.g. twitter, medium
  display: true // Set false to hide this section, defaults to true
};

// Skills Section

const skillsSection = {
  title: "Core Expertise",
  subTitle:
    "DATA & PLATFORM ENGINEER FOCUSED ON SCALABLE IDENTITY, ETL & CLOUD PIPELINES",
  skills: [
    emoji(
      "⚡ Architect and optimize large-scale batch & streaming pipelines with Apache Spark & Airflow"
    ),
    emoji(
      "⚡ Build & orchestrate Customer Data Platforms enabling identity resolution & data governance"
    ),
    emoji(
      "⚡ Design performant ETL/ELT with Talend, Python, SQL across GCP (BigQuery, Composer), Azure & AWS"
    ),
    emoji(
      "⚡ Containerize & deploy microservices on Kubernetes / GKE with CI/CD automation"
    ),
    emoji(
      "⚡ Performance tuning & migration of legacy .NET data codebases to distributed data platforms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "C#", fontAwesomeClassname: "fas fa-code"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Apache Spark", fontAwesomeClassname: "fas fa-bolt"},
    {
      skillName: "Apache Airflow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {skillName: "Talend", fontAwesomeClassname: "fas fa-cogs"},
    {skillName: "GCP", fontAwesomeClassname: "fab fa-google"},
    {skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-ship"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "CVR College of Engineering (JNTUH)",
      logo: require("./assets/images/cvr.png"), // placeholder logo reuse
      subHeader: "B.Tech in Electronics & Communication Engineering",
      duration: "2012 - 2016",
      desc: "Graduated with 81%"
      // descBullets: [
      //   "Core subjects: Data Structures, DBMS, Signals & Systems",
      //   "Active in coding & technology clubs"
      // ]
    },
    {
      schoolName: "SR Junior College",
      logo: require("./assets/images/sr.png"), // placeholder logo reuse
      subHeader: "MPC (Maths, Physics, Chemistry)",
      duration: "2010 - 2012",
      desc: "Graduated with 94%"
      // descBullets: [
      //   "Core subjects: Maths, Physics, Chemistry"
      // ]
    },
    {
      schoolName: "JGR High College",
      logo: require("./assets/images/jgr.png"), // placeholder logo reuse
      // subHeader: "MPC (Maths, Physics, Chemistry)",
      duration: "2005 - 2010",
      desc: "Graduated with 90%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Data Engineering & ETL", progressPercentage: "90%"},
    {Stack: "Cloud (GCP/Azure/AWS)", progressPercentage: "85%"},
    {Stack: "Distributed Computing (Spark)", progressPercentage: "60%"},
    {Stack: "Microservices & APIs", progressPercentage: "70%"}
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Sr. Product Engineer I",
      company: "Deloitte Consulting India Pvt. Ltd.",
      companylogo: require("./assets/images/deloitte.png"), // placeholder
      date: "Jul 2021 – Present",
      desc: "Lead engineering of Identity Resolution & data platforms across multi-cloud (GCP, Azure, AWS).",
      descBullets: [
        "Migrated IDR to support AWS & Azure in 3 months",
        "Modernized pipeline from .NET to Spark (70% faster)",
        "Custom pipeline processing 800M records (50% faster)"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Strategic Technology Resources International Pvt. Ltd.",
      companylogo: require("./assets/images/stri.png"),
      date: "Apr 2020 – Jun 2021",
      desc: "Developed Angular & low-code solutions incl. ATS & data automation for HR & integrations.",
      descBullets: [
        "Built modular SPAs & REST API integrations",
        "Developed ATS for recruiters with search automation"
      ]
    },
    {
      role: "Business Technology Analyst",
      company: "Deloitte Consulting India Pvt. Ltd.",
      companylogo: require("./assets/images/deloitte.png"),
      date: "Apr 2018 – Mar 2020",
      desc: "Implemented large-scale CDP ingestion & curation (Talend, Airflow, GCP).",
      descBullets: [
        "Automated 400GB+ file processing (cut 18-20 days to 2-3 days)",
        "Improved data feed runtime from 13h to 1h"
      ]
    },
    {
      role: "Software Engineer",
      company: "Capgemini Technology Services India Ltd.",
      companylogo: require("./assets/images/capgemini.png"),
      date: "Oct 2016 – Apr 2018",
      desc: "Delivered .NET & MVC solutions for financial & internal platforms with configurable deployments."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "",
  subtitle: "",
  projects: [],
  display: false
};

// Achievement Section
// Include certificates, talks etc

const certificationSection = {
  title: emoji("Certifications 🪪"),
  subtitle: "Selected Professional certifications.",
  certificationCards: [
    {
      title: "Google Cloud Professional Developer",
      subtitle:
        "GCP Certified (plus Professional Architect, ACE, Cloud Leader)",
      image: require("./assets/images/gcp_developer.png"),
      imageAlt: "GCP Certification",
      footerLink: []
    },
    {
      title: "Apache Airflow Champion & Fundamentals",
      subtitle:
        "Certified in Airflow Fundamentals & Champions of Apache Airflow (Astronomer)",
      image: require("./assets/images/airflow_astro.png"),
      imageAlt: "Airflow",
      footerLink: []
    },
    {
      title: "MongoDB SI Architect & Associate",
      subtitle: "MongoDB Solution Implementation certifications",
      image: require("./assets/images/mongodb.png"),
      imageAlt: "MongoDB",
      footerLink: []
    },
    {
      title: "Microsoft C# Developer & AWS Technical Professional",
      subtitle: "Microsoft Certified (Programming in C#)",
      image: require("./assets/images/c_sharp.png"),
      imageAlt: "Certifications",
      footerLink: []
    },
    {
      title: "GenAI Engineer",
      subtitle: "Deloitte Certified (GenAI Guild Program)",
      image: require("./assets/images/genai_deloittte.png"),
      imageAlt: "Certifications",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Professional certifications.",
  achievementsCards: [
    {
      title: "Apache Airflow Champion by Astronomer",
      subtitle:
        "Selected as Astronomer Champions for Apache Airflow® - A global initiative dedicated to fostering passionate advocates of Apache Airflow.",
      image: require("./assets/images/airflow_champion.png"),
      imageAlt: "airflow_champion",
      footerLink: []
    },
    {
      title: "Multiple Google Skill Badges",
      subtitle:
        "Aquired Multiple Skill badges, Arcade Points and Google SWAG through Cloud Skills Boost",
      image: require("./assets/images/gcp_skillboost.png"),
      imageAlt: "Awards",
      footerLink: []
    },
    {
      title: "Multiple Client & Internal Awards",
      subtitle:
        "Outstanding, Applause & Spot awards for delivery, migration & performance tuning",
      image: require("./assets/images/awards.png"),
      imageAlt: "Awards",
      footerLink: []
    },
    {
      title: "TechGig Code Gladiators 2023",
      subtitle:
        "Qualified to Final round and stood in Top 10 of TechGig Code Gladiators 2023 - One of the world's biggest coding competition with 300K+ developers registering every year",
      image: require("./assets/images/techgig_2023.png"),
      imageAlt: "TechGig",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I share lessons on data engineering, airflow, spark & cloud.",
  displayMediumBlogs: "true", // set true if you later connect Medium username
  blogs: [],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Dataflow Podcast",
      slides_url:
        "https://www.astronomer.io/podcast/from-etl-to-airflow-transforming-data-engineering-at-deloitte-digital-with-raviteja-tholupunoori/",
      event_url: "https://www.youtube.com/watch?v=KfheigCnu_8"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Guest appearances & conversations.",
  // Provide raw embed URLs (iframe src values); rendering handled in Podcast.js
  podcast: [
    "https://www.youtube.com/embed/KfheigCnu_8?si=xmc50L7aB-rQlSBK",
    "https://open.spotify.com/embed/episode/6zzMZhm3PGESw4MVzjsn7D?utm_source=generator&theme=0"
    // Added YouTube video embed
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to discuss data platform engineering, performance tuning or architecture.",
  number: "+91-9542710096",
  email_address: "raviteja0096@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", // no twitter currently
  display: false
};

const isHireable = true; // Open for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  certificationSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
