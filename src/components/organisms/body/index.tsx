import Paragraph from "@/components/molecules/paragraph";
import Grid from "@/components/organisms/grid";
import { ExperienceList } from "../list";
import { Portfolio } from "@/components/organisms/portfolio";
import { Footer } from "@/components/molecules/footer";

const knowledgeCards = [
  {
    title: "Frontend Development",
    subtitle: "JavaScript, TypeScript, ReactJS, NextJS, HTML, CSS, Sass, Styled Components",
    logo: "clarity:devices-solid"
  },
  {
    title: "Backend Development",
    subtitle: "NodeJS, MongoDB, Solidity, Hardhat",
    logo: "material-symbols:cloud-outline"
  },
  {
    title: "DevOps & CI/CD",
    subtitle: "CI/CD, Git/GitHub, GitHub Actions, Webpack, Parcel",
    logo: "hugeicons:security-lock"
  },
  {
    title: "Testing",
    subtitle: "Unit Testing",
    logo: "bi:clipboard-data"
  },
  {
    title: "Software Architecture",
    subtitle: "Microfrontends, Flux, MVC, MVVM",
    logo: "fluent-mdl2:production-floor-management"
  },
  {
    title: "Project Management",
    subtitle: "Agile, Scrum, Kanban",
    logo: "mdi:clipboard-check-outline"
  }
];

const portfolioCards = [
  {
    image: "https://sebarz.eth.link/de6a97238a36ce075d42.webp",
    title: "Manikins Arena",
    description: "ReactJS Interactive landing page for an online videogame. Page made for Life is The Game S.A.S",
    link: "https://github.com/imsebarz/manikins-arena",
    linkText: "View on GitHub",
  },
  {
    image: "https://sebarz.eth.link/28b3e0bc5ca0897bfe83.webp",
    title: "Petit Store",
    description: "A fully responsive e-commerce for small business, made on ReactJS, using React Router, Sass, and the React Context API",
    link: "https://github.com/imsebarz/petit-store",
    linkText: "View on GitHub",
  },
  {
    image: "https://sebarz.eth.link/aeb481e8e50ac72d82df.webp",
    title: "Photolalaphy Portfolio",
    description: "A responsive creative photography portfolio built on JavaScript using GSAP for animations and transitions",
    link: "https://github.com/imsebarz/photolalaphy-portfolio",
    linkText: "View on GitHub",
  },
];

const experienceList = [
  {
    leftTitle: "Senior Web UI Developer",
    leftLabel: "ChoiceHotels",
    date: "Dec 2022 - Present",
    rightTitle: "Globant",
    description: `As a Software Engineer on the Property and Rates team at ChoiceHotels, I contributed to enhancing the frontend user experience using cutting-edge technologies.`
  },
  {
    leftTitle: "Frontend Tech Lead",
    leftLabel: "Colombia · Hybrid ",
    date: "Oct 2022 - Apr 2023",
    rightTitle: "dotlabs()",
    description: `Skills: JavaScript, Frontend Development, SCSS, Next.js, React.js`
  },
  {
    leftTitle: "Co-Founder",
    leftLabel: "Área metropolitana de Medellín · On-site",
    date: "Mar 2022 - Mar 2023",
    rightTitle: "Web3ForU",
    description: `Co-founder and Mentor at WEB3FORU; In-person study group at the University of Antioquia. A transversal space to learn about WEB3 technologies.`
  },
  {
    leftTitle: "Web Technologies Mentor",
    leftLabel: "Colombia",
    date: "Mar 2022 - Feb 2023",
    rightTitle: "Código Abierto",
    description: `Mentor in web technologies for new programming students.`
  },
  {
    leftTitle: "Blockchain Developer",
    leftLabel: "Medellín, Antioquia, Colombia",
    date: "Aug 2022 - Jan 2023",
    rightTitle: "Bits Dapps",
    description: `Development for blockchain and WEB3 applications. Skills: HardHat, Unit Testing, web3.js, Solidity`
  },
  {
    leftTitle: "Frontend Developer",
    leftLabel: "Bucaramanga, Santander, Colombia",
    date: "Oct 2021 - Dec 2022",
    rightTitle: "Life Is The Game S.A.S",
    description: `Skills: JavaScript, Frontend Development, React.js, Web3.js`
  },
];

const educationList = [
  {
    leftTitle: "Systems Engineering",
    leftLabel: "Universidad de Antioquia",
    date: "Currently",
    rightTitle: "Universidad de Antioquia",
    description: "Skills: Programming, Algorithms, Data Structures, Software Engineering"
  },
  {
    leftTitle: "Launching into Machine Learning on Google Cloud",
    leftLabel: "Google",
    date: "Sept. 2024",
    rightTitle: "Google",
    description: "Machine Learning with TensorFlow on Google Cloud Platform"
  },
  {
    leftTitle: "Escuela de JavaScript",
    leftLabel: "Platzi",
    date: "Jun. 2021",
    rightTitle: "Platzi",
    description: "Skills: JavaScript, React.js, Node.js, Express.js"
  },
  {
    leftTitle: "From Smart Contracts to Dapps Bootcamp by CELO and Blockchain eX",
    leftLabel: "Blockchain eX - Innovation Center",
    date: "Oct. 2020",
    rightTitle: "Blockchain eX - Innovation Center",
    description: "Skills: Solidity, HardHat, Web3.js, Blockchain"
  },
];

export default function Body() {
  return (
    <div className="flex flex-col items-center w-full mx-auto gap-6 text-sm">
      <Paragraph label="My Knowledge" content="" />
      <Grid cards={knowledgeCards} />
      <Paragraph label="Portfolio" content="Here are some of the projects I have worked on." />
      <Portfolio cards={portfolioCards} />
      <Paragraph label="Experience" content="Here are some of the experiences I have had." />
      <ExperienceList list={experienceList} />
      <Paragraph label="Education" content="Here are some of the education I have had." />
      <ExperienceList list={educationList} />
      <Footer />
    </div>
  );
}