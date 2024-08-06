import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hello! I am currently an Intern Frontend Developer. With a passionate enthusiasm for web programming and user interface design, I have dedicated significant time to enhancing my skills in HTML, CSS, JavaScript, as well as advanced frameworks and libraries such as ReactJS and NextJS. I am eager to contribute to your project as an Intern Frontend Developer, where I can apply my knowledge and skills to help create outstanding web products.`;

export const ABOUT_TEXT1 = `Welcome to my personal page! I am a third-year student majoring in Information Technology, currently pursuing a career in front-end development. With a passionate dedication to web programming, I have honed my skills in using HTML/CSS, JavaScript, ReactJS, and NextJS.`;
export const ABOUT_TEXT2 = `My aim is to continue learning, enhancing my skills, and seeking opportunities to work in a professional environment where I can contribute and learn from experienced professionals. I aspire to engage in larger, more complex projects to challenge myself and broaden my vision within the field of information technology.`;
export const ABOUT_TEXT3 = `Goals: My aim is to continue learning, enhancing my skills, and seeking opportunities to work in a professional environment where I can contribute and learn from experienced professionals. I aspire to engage in larger, more complex projects to challenge myself and broaden my vision within the field of information technology.`;

export const EDUCATION = [
  {
    title: "University",
    role: "MIREA - Russian Technological University",
    company: "Russian Technological University",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    title: "Degree",
    role: "Bachelor Degree",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    title: "Years of education",
    role: "2022-2026",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    title: "Specialization",
    role: "Informatics and computing machinery 09.03.01",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Stream and listen to music online",
    image: project1,
    description:
      "A fully functional online stream music website with features like play-music, search, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Next.Js", "FireBase", "Tailwind"],
    link: "#"
  },
  {
    title: "Influencer platform - Freelance",
    image: project2,
    description:
      "A website for selling video content products, with features for video playback, customer email submission to the admin, and a slider",
    technologies: ["HTML", "CSS", "JavaScript", "EmailJS"],
    link: "https://laavagency.ru"
  },
  {
    title: "Pet sales website",
    image: project3,
    description:
      "A simple website built with HTML/CSS, with subpages and a slider.",
    technologies: ["HTML", "CSS"],
    link: "https://project-2-rosy.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "#"
  },
];

export const CONTACT = {
  address: "Moscow, Russia",
  phoneNo: "+7(982)717-73-57",
  email: "matrix16hung@gmail.com",
};