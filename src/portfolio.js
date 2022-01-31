/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jackeline Jaimes",
  title: "Hola, mi nombre es Jacke!",
  subTitle: emoji(
    "Ingeniera metalúrgica enamorada del desarrollo de software, especialmente el front-end 🚀 tengo experiencia construyendo aplicaciones web con JavaScript / Reactjs / Nodejs y otras librerias y frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jackeline1410",
  linkedin: "https://www.linkedin.com/in/jacke-dev",
  gmail: "ing.jacke@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Que es lo que hago?",
  subTitle: "Soy una desarrolladora front-end que ama la tecnología, algunas herramientas que he utilizado:",
  skills: [
    emoji(
      "⚡ Desarrollo interfaces interactivas front para tus aplicaciones web"
    ),
    emoji("⚡ Consumo e Interactuo con APIs backend"),
    emoji(
      "⚡ verificación de llamadas APIs con postman y BBDD Sql"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Platzi",
      logo: require("./assets/images/platziweb.webp"),
      subHeader: "Cursos Front-end, desarrollo web, programación orientada a objetos",
      duration: "2020 - nunca pares de aprender",
      desc: "Completé la escuela de desarrollo web, reactjs, etc etc....",
      descBullets: [
        "Estudiante destacada ...",
        "Estudiante ..."
      ]
    },
    {
      schoolName: "Universidad Industrial de Santander",
      logo: require("./assets/images/uisLogo.png"),
      subHeader: "Ingenieria Metalurgica",
      duration: "2007 - 2013",
      desc: "Estudie ingenieria metalurgica y obtube ...",
      descBullets: ["Hice mi tesis de grado en francia..."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Diseno", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "AWS",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desarrolladora y Product Owner Ad Honorem",
      company: "ASEDUIS",
      companylogo: require("./assets/images/aseduisLogo.png"),
      date: "June 2018 – Present",
      desc: "Dise;o y desarrollo del portal impulsauis.com  y aseduis.com",
      descBullets: [
        "Dise;o y plan de trabajo para el desarrollo de los portales",
        "Desarrollo en reactjs del portal impulsauis.com, hecho en reactjs consumiendo recursos en AWS"
      ]
    },
    {
      role: "Ingeniera de procesos, manejo de personal y proyectos",
      company: "COTECMAR",
      companylogo: require("./assets/images/cotecmarLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Proyectos destacados front",
  subtitle: "Algunos proyectos que he realizado con mis actuales conocimientos en front",
  projects: [
    {
      image: require("./assets/images/impulsaLogo.svg"),
      projectName: "Impulsa UIS",
      projectDesc: "Participe en el dise;o y desarrollo del portal de la UIS en donde se permite registrar emprendimientos a sus egresados o estudiantes",
      footerLink: [
        {
          name: "Visita el sitio",
          url: "https://impulsauis.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ingeviajesLogo.png"),
      projectName: "Nextu",
      projectDesc: "Este fue mi primer proyecto front, lo hice en wordpress, lo considero importante por que fue mi primer acercamiento a este hermoso mundo de la programaci'on",
      footerLink: [
        {
          name: "Visita el sitio",
          url: "https://ingeviajes.com.co/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Logros y Certificados 🏆 "),
  subtitle:
    "Logros, Certificados, Reconocimientos y otras cosas guay que he realizado!",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle:
    "Quieres discutir sobre algun proyecto o simplemente saludarme? Puedes contactarme por correo o a mi numero de trabajo.",
  number: "+34 617376659",
  email_address: "ing.jacke0@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
