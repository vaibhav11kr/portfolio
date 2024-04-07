import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";
import Work4 from "../../assets/work4.png";
import Work5 from "../../assets/work5.png";
import Work6 from "../../assets/work6.png";
import Work7 from "../../assets/work7.png";

const projectsdata = [
  {
    id: 1,
    title: "Portfolio 1.0",
    description: "This was the first portfolio that I created using react and custom css.",
    image: Work1,
    technologies: ["React", "CSS", "HTML"],
    liveLink: "https://vaibhavpersonal.netlify.app/",
    githubLink: "https://github.com/vaibhav11kr/Portfolio1.0"
  },
  {
    id: 2,
    title: "Chat app",
    description: "Built using ChatEngine API",
    image: Work2,
    technologies: ["React", "Tailwind", "ChatEngine API"],
    liveLink:"https://vaibhavchat.netlify.app/",
    githubLink: "https://github.com/vaibhav11kr/chat-app"
  },
  {
    id: 3,
    title: "Weather App",
    description: "Built using Openweather API",
    image: Work3,
    technologies: ["React", "Tailwind", "OpenWeather API"],
    liveLink: "https://vaibhavweather.netlify.app/",
    githubLink: "https://github.com/vaibhav11kr/Weather-APP"
  },
  {
    id: 4,
    title: "Photography",
    description: "Built with React",
    image: Work4,
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://vaibhavphotography.netlify.app/",
    githubLink: "https://github.com/vaibhav11kr/hypersonicphotogrphy"
  },
  {
    id: 5,
    title: "Clock",
    description: "Cool Live clock",
    image: Work5,
    technologies: ["Vue.js", "Express", "Firebase"],
    liveLink: "https://vaibhavclock.netlify.app/",
    githubLink: "https://github.com/vaibhav11kr/Live_Clock"
  },
  {
    id: 6,
    title: "Leetcode",
    description: "700+ Questions",
    image: Work6,
    liveLink: "https://leetcode.com/vaibhav11kr/",
  },
  {
    id: 7,
    title: "Geeks Practice Board",
    description: "150+ Questions",
    image: Work7,
    liveLink:"https://auth.geeksforgeeks.org/user/vaibhavkumar9693/practice/",
  },
  // Add more projects as needed
];

export default projectsdata;
