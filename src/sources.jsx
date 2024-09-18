import client1 from "./assets/Client1.jpg";
import client2 from "./assets/Client2.jpg";
import client3 from "./assets/Client3.jpg";
import client4 from "./assets/Client4.jpg";
import client5 from "./assets/Client5.jpg";
import { IoMdAnalytics } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent, MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaYoutube, FaLaptopCode } from "react-icons/fa6";
import { FaFacebookSquare, FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

export const tabs = [
  { name: "About Me", id: "about" },
  { name: "Education", id: "educations" },
  { name: "Skill", id: "skill" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Work Experience", id: "workexperiences" },
  { name: "Testimonials", id: "testimonials" },
];

export const whyChooseMe = [
  {
    title: "Unmatched Local Expertise",
    icon: <GrUserExpert />,
    link: "",
  },
  {
    title: "Comprehensive Market Analysise",
    icon: <IoMdAnalytics />,
    link: "",
  },
  {
    title: "Dedicated Client Support",
    icon: <MdOutlineSupportAgent />,
    link: "",
  },
  {
    title: "Innovative Marketing Strategies",
    icon: <RiExchange2Fill />,
    link: "",
  },
];

export const workexperience = [
  {
    name: "Java Developer Internship",
    location: "At Mass Technologies Narhe Pune",
    date: "Feb-March 2023",
    project:"Secured G Cloud-Based Framework for Government Healthcare Services",
    description: ` Played a key role in developing the frontend of a secured cloud-based framework, dedicated to delivering government healthcare services. Leveraged HTML, CSS, Bootstrap, and JavaScript to create an intuitive and user-friendly interface.`,
    link: "http://www.masstechnologies.co.in/home.html",
  },
  {
    name: "Web Devoper And Designing Internship",
    location: "At The Sparks Foundation",
    date: "March -April 2022",
    project: " Basic Banking System",
    description: `Developed a Basic Banking System utilizing a Full Stack approach, incorporating HTML, CSS, Bootstrap, and JavaScript for the frontend, PHP for the backend, and MySQL for the database`,
    link: "https://www.thesparksfoundationsingapore.org/",
  },
];
export const education = [
  {
    name: "Class X",
    percentile: "Percentage-86.60",
    description: `Completed My Class X From LBSV Bhandara`,
    link: "https://schools.org.in/bhandara/27100100140/lal-bahadur-shastri-vidh-bhandara.html",
  },
  {
    name: "Class XII",
    percentile: " Percentage-78.77",
    description: `Completed My Class XII From JMPC Bhandara`,
    link: "https://jmpatelcollege.com/",
  },
  {
    name: "Bachelor Of Engineering (B.E)",
    percentile: "CGPA-9.2",
    description: `Completed My Engineering  from Sinhgad College Of Engineering Pune`,
    link: "https://cms.sinhgad.edu/sinhgad_engineering_institutes/vadgaon_scoe/about/contact_us.aspx",
  },
];
export const services = [
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting intuitive and visually appealing interfaces that provide an exceptional user experience. I focus on creating designs that are both functional and aesthetically pleasing.`,
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode />,
    description: `Building responsive, high-performance websites tailored to your business needs. I specialize in full-stack development, ensuring seamless functionality and a smooth user experience`,
  },
  {
    name: "Content Creation",
    icon: <TfiWrite />,
    description: `Delivering engaging and impactful content that resonates with your target audience. I create content that not only informs but also drives user action and brand loyalty`,
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Begineer",
      },
      {
        skill: "Adobe Photoshop",
        level: "Begineer",
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "ReactJS",
        level: "Experienced",
      },
      {
        skill: "Material UI",
        level: "Intermediate",
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Java",
        level: "Experienced",
      },
      {
        skill: "Node JS",
        level: "Begineer",
      },
      {
        skill: "MangoDB",
        level: "Begineer",
      },
      {
        skill: "PHP",
        level: "Begineer",
      },
      {
        skill: "Python",
        level: "Begineer",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Powered School",
    image:
      "https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png",
    category: "UI/UX",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "XD",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 2,
    title: "E-Commerce Application",
    image:
      "https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg",
    category: "Web",
    description: `Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 3,
    title: "Robotic Engineering Web Application",
    image:
      "https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png",
    category: "Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    id: 4,
    title: "Project Management application",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png",
    category: "Apps",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 5,
    title: "Mobile bank - App Design",
    image:
      "https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png",
    category: "UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
    ],
  },
  {
    id: 6,
    title: "Quiz App Development",
    image:
      "https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg",
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
];

export const clients = [
  {
    image: client1,
    name: "Roshan",
    review: `Yash's expertise in both frontend and backend development is unmatched. His work is always top-notch and delivered on time.`,
  },
  {
    image: client2,
    name: "Jessica Taylor",
    review: ` Working with Yash was a pleasure. His attention to detail and ability to solve complex problems impressed me the most.`,
  },
  {
    image: client3,
    name: "James Miller",
    review: `Yash is a true professional. His knowledge of React and TypeScript helped us build a dynamic and responsive web application`,
  },
  {
    image: client4,
    name: "David Anderson",
    review: `Yash's understanding of modern web technologies is outstanding. He delivered a highly polished product that we love`,
  },
  {
    image: client5,
    name: "Olivia Martinez",
    review: `Yash is a talented developer with a keen eye for design. His ability to integrate complex features seamlessly is impressive.`,
  },
];

export const contactOptions = [
  {
    title: "Email",
    value: "yashkhetade54@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    title: "Phone Number",
    value: "7038394988",
    icon: <IoCallOutline />,
  },
  {
    title: "Address",
    value: "Pune",
    icon: <IoLocationOutline />,
  },
];

export const socialHandles = [
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/yash-khetade-44ab53218/",
  },
  {
    name: "Leetcode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/yashkhetade54/",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/yashkhetade",
  },
  {
    name: "Facebook",
    icon: <FaFacebookSquare />,
    link: "https://www.facebook.com/yash.khetade.3",
  },
];

export const footer = [
  {
    title: "Explore",
    routes: [
      { name: "About Me", id: "about" },
      { name: "Skill", id: "skill" },
    ],
  },
  {
    title: "Trusted",
    routes: [
      { name: "Services", id: "services" },
      { name: "Projects", id: "projects" },
      { name: "Testimonials", id: "testimonials" },
    ],
  },
  {
    title: "Others",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
];
