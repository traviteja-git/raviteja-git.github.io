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

// Recommendations Section (manually curated testimonials)
const recommendationsSection = {
  title: "Recommendations 🗣",
  subtitle: "What colleagues and stakeholders say.",
  recommendations: [
    {
      name: "Andi Mitre",
      title: "Engineering Lead",
      company: "Deloitte",
      relationship: "Ravi Reported to Andi",
      date: "Nov 2023",
      quote:
        "I absolutely loved having Raviteja on my team. During his time at Deloitte he wore many hats and for that, I will always be thankful! Raviteja is a one of a kind, extremely talented developer. He built some of the most complex components of our identity resolution system while showing a deep understanding of data engineering and software development. He played an active role on the team with responsibilities ranging from algorithm design, system architecture, core code development, mentoring junior engineers, and on an as needed basis, client support and stakeholder interactions. He’s a hard worker who is eager to continuously learn and thrives on complex problems. He’s easy to talk to, very receptive to feedback, empathetic with clients and loves to fully immerse in the team culture. Having Raviteja work on our identity resolution offering aligned perfectly with his abilities since it is an area that requires creativity, exploration and a deep understanding of many edge cases to construct such a flexible, yet robust solution.On a more specific note, Raviteja single handedly re-wrote a micro-service and was able to improve performance by 5x, having an immensely positive impact with existing clients. His dedication and capabilities have more than once turned around projects at risk, saving the company time and resources.",
      avatar: null
    },
    {
      name: "Tarini Dash",
      title: "Head of Data Engineering and Analytics",
      company: "Deloitte",
      relationship: "Ravi Managed by Tarini",
      date: "April 2024",
      quote:
        "Over the span of three years, Ravi served under my supervision as a Senior Data Engineer at Deloitte. During the time he exhibited remarkable qualities and demonstrated significant growth. He consistently displayed a high level of energy and enthusiasm in his development work, establishing himself as a proactive and delivery driven individual. Witnessing his progression from an average developer to a proficient and capable of independently leading and executing tasks from inception to completion was truly remarkable.Ravi's approach to his work is characterized by his intuitive nature and his relentless pursuit of adopting cutting-edge technologies. He possesses a genuine thirst for knowledge, continually seeking opportunities to expand his skill set and stay abreast of emerging trends in the field. Notably, he has amassed a formidable array of cloud certifications, a testament to his dedication to professional growth and development.For any organization in need of a seasoned and go getter Senior Data Engineer, who is capable of architecting and implementing pipelines from inception to execution, Ravi stands out as an exemplary candidate. His track record of success, coupled with his unwavering commitment to excellence, make him a highly valuable asset to any team or project.I wish him all the best in his future.",
      avatar: null
    },
    {
      name: "Manoj Balaji",
      title: "Data Scientist",
      company: "Jupiner Networks",
      relationship: "Manoj Worked with Ravi",
      date: "May 2023",
      quote:
        "Raviteja is a very hard working and dedicated developer. He is very detail oriented and quite a creative programmer & has a very broad knowledge of software including languages, API’s, databases and documentation. I found him to be very helpful, always willing and able to explain how things were supposed to work which help me to tackle complex tasks.In addition to his technical expertise, Raviteja shows total dedication to his work, his colleagues, and his clients. He is a team player who is very customer-focused and always willing to help and share his knowledge with others. He has a great amount of patience when explaining how something works from both a technical and a functional standpoint. Raviteja would be a valuable asset to any organization and I highly recommend him.",
      avatar: null
    },
    {
      name: "Abin Mathew",
      title: "Data Engineer",
      company: "Deloitte",
      relationship: "Ravi Directly to Ravi",
      date: "Nov 2023",
      quote:
        "Ravi has been a go-to person in the Identity Resolution (IDR) project. His deep understanding of IDR functionalities and his willingness to guide others make him an invaluable team member.With strong expertise in data engineering tools and technologies, he continuously learns and applies his knowledge to solve complex challenges efficiently. His collaborative approach and problem-solving mindset ensure that the solutions he builds are both effective and scalable. I highly recommend Ravi for his technical acumen and dedication!",
      avatar: null
    },
    {
      name: "Garima",
      title: "Data Engineer",
      company: "Deloitte",
      relationship: "Garima worked with Raviteja on the same team",
      date: "June 2025",
      quote:
        "Ravi is one of the most talented and dedicated engineers I have ever worked with. His depth of knowledge in the technical aspects of Identity Resolution is truly unmatched. Ravi constantly goes above and beyond in his role to ensure success of the project . He constantly seeks out new technologies and methodologies always striving to expand his skill set, raising the bar for everyone around him. It’s been an honour to work with Ravi.",
      avatar: null
    },
    {
      name: "Tanvi Moharir",
      title: "Consultant",
      company: "Deloitte",
      relationship: "Tanvi Worked with Ravi",
      date: "Nov 2022",
      quote:
        "Raviteja was one of the senior engineers , I worked alongside with, in the core development team. He is passionate and well versed with the internal workings of CDP systems. While his expertise lie in backend development with C# and .Net framework, he was very quick on picking up other languages and frameworks as well. Any team looking for a bright and passionate engineer would be lucky to have him.",
      avatar: null
    },
    {
      name: "Nikitha Kumari",
      title: "Technical Lead QA",
      company: "Deloitte",
      relationship: "Mentored Ravi",
      date: "Nov 2023",
      quote:
        "Ravi had been my coachee for almost a year.Ravi has very good technical skills and he is always striving to excel in whatever he is doing.He is always ready to learn and always seeking feedback to be a better version of himself.Ravi adds value to the projects he is working on.It was great mentoring you Ravi!All the very best for your future!",
      avatar: null
    },
    {
      name: "Samyuktha K",
      title: "Software Developer",
      company: "Equifax",
      relationship: "Ravi Mentored Samyuktha",
      date: "Nov 2022",
      quote:
        "Raviteja is a very hard working and dedicated developer. He is very detail oriented and quite a creative programmer & has a very broad knowledge of software including languages, API’s, databases and documentation. I found him to be very helpful, always willing and able to explain how things were supposed to work which help me to tackle complex tasks.In addition to his technical expertise, Raviteja shows total dedication to his work, his colleagues, and his clients. He is a team player who is very customer-focused and always willing to help and share his knowledge with others. He has a great amount of patience when explaining how something works from both a technical and a functional standpoint. Raviteja would be a valuable asset to any organization and I highly recommend him.",
      avatar: null
    },
    {
      name: "Snehitha Anumalla",
      title: "Sr. Consultant",
      company: "Deloitte",
      relationship: "Snehitha Worked with Ravi",
      date: "May 2023",
      quote:
        "Raviteja is great team player and has extensive knowledge on Cloud platform, API's. He has been a go-to person for many collegues in the team for various issues on ETL as well. Being a quick learner he was able to mould to any technology based on requirements.",
      avatar: null
    },
    {
      name: "Maddie Paul",
      title: "Manager RPA",
      company: "Farm Mutel Re",
      relationship: "Maddie Worked with Ravi",
      date: "Dec 2022",
      quote:
        "While working with Raviteja, I found him to be a quick learner demonstrating flexibility to keep trying without the fear of failure. His enthusiasm and energy to pursue complex projects is commendable. Undoubtedly, he would be an asset to any firm/project he takes on.",
      avatar: null
    }
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
  recommendationsSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
