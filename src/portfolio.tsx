// import emoji from "react-easy-emoji";

export const greeting = {
  username: "Lee Seo Lin",
  title: "SEO LIN Portfolio",
  subTitle: "",
  role: "성장해 가고 있는 개발자 입니다",
  resumeLink: "Your resume link... google drive or something else",
  profileImage: "/assets/profile.jpg",
  // IMPORTANT
  // If you don't want to show this, change view to false. DO NOT DELETE!
  view: true,
};

export const socialMediaLinks = {
  // IMPORTANT
  // if you don't have, change value to blank or false!! DO NOT DELETE!
  github: "https://github.com/lxxnee",
  instagram: "Your instagram link",
  medium: "https://velog.io/@lxn_ee/posts",
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
    { fontAwesome: "fas fa-database", text: "Oracle", proficiency: 60 },
    { fontAwesome: "fab fa-laravel", text: "Laravel", proficiency: 70 },
    { fontAwesome: "fas fa-database", text: "MariaDB", proficiency: 60 },
  ],
  view: true,
};

export const experience = {
  title: "학력 및 자격증",
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
  subTitle: "제가 참여했던 개인프로젝트, 팀원프로젝트 입니다",
  lists: [
    {
      title: "PINK BORD",
      desc: "html, css, 퓨어php를 사용해서 간단한 게시판 구현",

      url: "http://lsl9787.dothome.co.kr/index.php",
    },
    {
      title: "반려묘 TODO LIST",
      desc: "html , css , php , mariadb , figma 를 사용해서 반려고양이 정보를 입력받고 할일목록을 작성",
      url: "http://112.222.157.156:6411/todolist_index.php",
    },
    {
      title: "Project2",
      desc: "description",
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
  title: "My Posts 📒",
  subTitle: "공부 정리및 프로젝트 관련 정리글",
  lists: [
    {
      title: "반려묘 TODO LIST",
      desc: "프로젝트를 준비하면서 정리해둔 글 입니다",
      url: "https://velog.io/@lxn_ee/%EB%B0%98%EB%A0%A4%EB%AC%98-TODO-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
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
  subTitle: "Email : seolin9787@nate.com",
  introduce: "",
  view: true,
};
