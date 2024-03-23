// import emoji from "react-easy-emoji";

export const greeting = {
  username: "Seo Lin",
  title: "LEE SEO LIN Portfolio",
  subTitle: "",
  role: "성장해 가고 있는 개발자 입니다",
  resumeLink: "Your resume link... google drive or something else",
  // IMPORTANT
  // If you don't want to show this, change view to false. DO NOT DELETE!
  view: true,
};

export const socialMediaLinks = {
  // IMPORTANT
  // if you don't have, change value to blank or false!! DO NOT DELETE!
  github: "https://github.com/lxxnee",
  instagram: "Your instagram link",
  medium: "Your medium link",
  stackoverflow: "https://velog.io/@lxn_ee/posts",
};

export const skills = {
  title: "Skills ✔",
  subTitle: "",
  describeSkills: [
    // "✔ describe first",
    // "✔ describe second",
    // "✔ describe third",
    // "✔ describe forth",
    // "✔ describe fifth",
  ],
  // IMPORTANT
  // You need to find className for font-awesome icon
  // Go to https://fontawesome.com/ and search icon
  lists: [
    { fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80 },
    { fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70 },
    { fontAwesome: "fab fa-js", text: "JS", proficiency: 70 },
    { fontAwesome: "fab fa-php", text: "PHP", proficiency: 70 },
    { fontAwesome: "fab fa-react", text: "React", proficiency: 30 },
    { fontAwesome: "fab fa-vuejs", text: "Vue.JS", proficiency: 60 },
    { fontAwesome: "fas fa-database", text: "Oracle SQL", proficiency: 60 },
    { fontAwesome: "fab fa-laravel", text: "Laravel", proficiency: 70 },
    { fontAwesome: "fas fa-database", text: "MariaDB", proficiency: 60 },
  ],
  view: true,
};

export const experience = {
  title: "Education and certificate",
  lists: [
    {
      date: "2018.03~",
      company: "Google",
      role: "Front-End Developer",
    },
    {
      date: "test",
      company: "test",
      role: "test",
    },
    {
      date: "test",
      company: "test",
      role: "test",
    },
    {
      date: "test",
      company: "test",
      role: "test",
    },
    {
      date: "test",
      company: "test",
      role: "test",
    },
  ],
  view: true,
};

export const openSourceProjects = {
  title: "Open Source Projects 💻",
  view: true,
};

export const projects = {
  title: "Projects 💻",
  subTitle: "subtitle for projects",
  lists: [
    {
      title: "Project1",
      desc: "very very very very very very very very very very very very very very long very long description for clamp testing",
      url: "#",
    },
    {
      title: "Project2",
      desc: "description",
      url: "#",
    },
  ],
  view: true,
};

export const achievements = {
  title: "Achievements And Certifications 🏆",
  subTitle: "subtitle for achievement",
  lists: [
    {
      img: require("./assets/sad-icon.png"),
      alt: "I'm sad..",
      title: "There is no Achievement...😥",
      desc: "I'll try harder!",
    },
    {
      img: require("./assets/sad-icon.png"),
      alt: "I'm sad..",
      title: "There is no Certification...😥",
      desc: "I'll try harder!",
    },
  ],
  view: true,
};

export const blogs = {
  title: "My Posts 📰",
  subTitle: "subtitle for posts",
  lists: [
    {
      title: "Your Post1",
      desc: "Description",
      url: "#",
    },
    {
      title: "Your post2",
      desc: "Description",
      url: "#",
    },
  ],
  view: true,
};

export const contactInfo = {
  title: "Contact 📞",
  subTitle: "",
  introduce: "",
  view: true,
};
