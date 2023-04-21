import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  jupyternotebook,
  java,
  css,
  html,
  openCV,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  gitHub,
  github,
  figma,
  docker,
  meta,
  python,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java",
    icon: web,
  },
  {
    title: "Computer Vision",
    icon: backend,
  },
  {
    title: "Robotics",
    icon: mobile,
  },
  {
    title: "Web Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "OpenCv",
    icon: openCV,
  },
  {
    name: "JupyterNotebook",
    icon: jupyternotebook,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Git Hub",
    icon: gitHub,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  // {
  //   // write and edit about your previous work experience here
  //   title: "eYSIP intern",
  //   company_name: "eYantra IIT Bombay",
  //   // change icon by adding images into assets folder
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "June 2022 - July 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Mechanical Head",
    company_name: "SRA: Society of Robotics and Automation",
    icon: tesla,
    iconBg: "#F0F0F0",
    date: "March 2021 - Present",
    points: [
      "Currently Serving as Mechanical Head at the College Robotics club.",
      "Managed mentored, and co-conducted Wall-E (Self-Balancing Robot), Mario (3 DOF Robotic Arm) Workshops, and Pixels(Image Processing and Computer Vision) Seminar for over more than 200 freshman students.",
      "Contribute to Design and Development of Mario(3 DOF Robotic Arm).",
      "Delivered lectures on Intro to Linear Algebra, CAD Designing, Feedback Controller(PID), Image representation and Image processing using Numpy, Joints, Coupling and Basics of Coding.",
    ],
  },
  {
    // write and edit about your previous work experience here
    title: "e-YSIP intern",
    company_name: "E-Yantra, IIT Bombay",
    // change icon by adding images into assets folder
    icon: starbucks,
    iconBg: "#F0F0F0",
    date: "June 2022 - July 2022",
    points: [
      "Designed and developed Two Wheeled Self Balancing Robot with a mechanism to alter the bot's centre of gravity in SolidWorks.",
      "Designed and fabricated a customized gearbox to align the wheels driven by parallel motors",
      "Implemented the concept of Self Balancing Robot on Hardware using a Proportiona Integral Derivative control strategy for balancing the robot with a variable CG.",
    ],
  },
  {
    title: "E-YRC 2021-22",
    company_name: "E-Yantra, IIT Bombay",
    icon: starbucks,
    iconBg: "#F0F0F0",
    date: "October 2021 - April 2022",
    points: [
      "Designed a dairy bike with a two-wheeled Self Balancing Robot with an Arm for picking and placing dairy goods.",
      "Implemented Langrangian Equations and Control Theory to Build mathmatical model for simulation in CoppeliaSim.",
      "Inverse Kinematics was used for pick-and-place operations using the bike's arm.",
      "We used a Linear Quadratic Regulator Control strategy for balancing the robot equipped with a Reaction Wheel Mechanism.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };