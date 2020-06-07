
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Oleg Brezitskyy",
  title: "Hola, soy Oleg!",
  subTitle: emoji("Soy un programador entusiasta que ama Python. Hago scripting, scraping y ciencia de datos (o al menos lo intento)."),
  resumeLink: "https://drive.google.com/file/d/12BeHeLIWQTfzdag4U-vnc3sdZ7a3zFgF/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/olegbrz",
  linkedin: "https://www.linkedin.com/in/olegbrz/",
  gmail: "brezitskyyoleg@gmail.com",
  twitter: "https://twitter.com/oleg_brz"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "¿Qué se hacer?",
  subTitle: "Soy un \"script kiddie\"",
  skills: [
    emoji("⚡ Scripting"),
    emoji("⚡ Web-scraping"),
    emoji("⚡ Data-mining")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },

    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "olegbrz", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "",
  subtitle: "",
  projects: [ ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji(""),
  subtitle: "",

  achivementsCards: []
};


// Blogs Section

const blogSection = {

  title: "",
  subtitle: "",

  blogs: []
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(""),

  talks: []
};

// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: []
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+34 667 90 96 90",
  email_address: "brezitskyyoleg@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : ""//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
