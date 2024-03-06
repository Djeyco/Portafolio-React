import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-01.png";
import Work2 from "./assets/project-02.png";
import Work3 from "./assets/project-03.png";
import Work4 from "./assets/project-04.png";
import Work5 from "./assets/project-05.png";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Nombre : ",
    description: "Esteban Jacob",
  },

  {
    id: 2,
    title: "Apellidos : ",
    description: "Cabrera Inoa",
  },

  {
    id: 3,
    title: "Edad : ",
    description: "29 Años",
  },

  {
    id: 4,
    title: "Nacionalidad : ",
    description: "Dominicano",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Disponible",
  },

  {
    id: 6,
    title: "Direccion : ",
    description: "Santiago de los Caballeros",
  },

  {
    id: 7,
    title: "Teléfono : ",
    description: "(809) 383-2838",
  },

  {
    id: 8,
    title: "Email : ",
    description: "jeyco0009@gmail.com",
  },

  {
    id: 9,
    title: "Instagram : ",
    description: "@jeyco009",
  },

  /*{
    id: 10,
    title: "Idiao : ",
    description: "Spanish, English",
  },*/
];

export const stats = [
  {
    id: 1,
    no: "4+",
    title: "Años de <br /> experiencia",
  },

  {
    id: 2,
    no: "6+",
    title: "Proyectos <br /> completados",
  },

  {
    id: 3,
    no: "3+",
    title: "Clientes <br /> felices",
  },

  /*{
    id: 4,
    no: '0+',
    title: 'Premios <br /> ganados',
  },*/
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - Actual",
    title: "Encargado IT <span> Facep </span>",
    desc: "Como encargado de IT, lidero equipos para planificar y ejecutar proyectos, asegurando la eficiencia de la infraestructura tecnológica. Brindo soporte técnico, implemento medidas de seguridad y colaboro estrechamente con otros departamentos. Gestiono el presupuesto, desarrollo estrategias tecnológicas y garantizo el cumplimiento normativo, evaluando constantemente nuevas tecnologías para mejorar nuestro rendimiento empresarial.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - 2023",
    title: "Analista de Datos <span> Forward Financing </span>",
    desc: "Como Analista de Datos, me especializo en la recopilación y análisis de información clave para la toma de decisiones empresariales. Utilizo mi experiencia para interpretar conjuntos de datos, transformándolos en conocimientos estratégicos. Colaboro con equipos, garantizo la integridad de los datos y propongo soluciones basadas en hallazgos analíticos. Mi enfoque se centra en optimizar la eficiencia y la toma de decisiones informadas.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - 2022",
    title: "Técnico de Sistemas <span> Colegio San Felipe Apóstol </span>",
    desc: "Como Técnico en Sistemas, me dedico a la administración y mantenimiento de sistemas informáticos. Realizo tareas como instalación de software, resolución de problemas técnicos, y aseguro la eficiencia y seguridad de la infraestructura tecnológica. Colaboro con usuarios para garantizar un entorno de trabajo tecnológicamente eficiente y resolutivo.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title:
    "Ingeniero en Sistemas Computacionales <span> Universidad Católica del Cibao (UCATECI) </span>",
    desc: "",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title:
    "Electrónica Básica <span> Instituto Tecnológico de Las Américas (ITLA) </span>",
    desc: "",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Desarrollador de Aplicaciones en las Nubes (Freelancer) <span> INFOTEP </span>",
    desc: "",
  },

  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Creación de Videos Educativos <span> INFOTEP </span>",
    desc: "",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "20",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "49",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "20",
  },

  {
    id: 4,
    title: "C#",
    percentage: "46",
  },

  {
    id: 5,
    title: "Wordpress",
    percentage: "55",
  },

  {
    id: 6,
    title: "Godot & GDScript",
    percentage: "50",
  },

  {
    id: 7,
    title: "SQL",
    percentage: "15",
  },

  {
    id: 8,
    title: "React",
    percentage: "35",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Solo Dungeons",
    details: [
      {
        icon: <FiFileText />,
        title: "Proyecto : ",
        desc: "Videojuego",
      },
      {
        icon: <FiUser />,
        title: "Cliente : ",
        desc: "Esteban & Neurys",
      },
      {
        icon: <FaCode />,
        title: "Lenguage : ",
        desc: "GDScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Djeyco/SoloDungeonsProyect",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Pagina Web FACEP",
    details: [
      {
        icon: <FiFileText />,
        title: "Proyecto : ",
        desc: "Páginas Web",
      },
      {
        icon: <FiUser />,
        title: "Cliente : ",
        desc: "FACEP",
      },
      {
        icon: <FaCode />,
        title: "Desarrollado en : ",
        desc: "Wordpress",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://facep.com.do/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Carrito de Compra",
    details: [
      {
        icon: <FiFileText />,
        title: "Projecto : ",
        desc: "Carrito de Compra",
      },
      {
        icon: <FiUser />,
        title: "Cliente : ",
        desc: "Proyecto Personal",
      },
      {
        icon: <FaCode />,
        title: "Lenguage : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://cestashop.netlify.app/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Pagina Web de Anime",
    details: [
      {
        icon: <FiFileText />,
        title: "Projecto : ",
        desc: "Pagina Web de Anime",
      },
      {
        icon: <FiUser />,
        title: "Cliente : ",
        desc: "Proyecto Personal",
      },
      {
        icon: <FaCode />,
        title: "Lenguage : ",
        desc: "HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://animehtml.netlify.app/",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Pagina Web Colegio",
    details: [
      {
        title: "Projecto : ",
        desc: "Pagina Web Colegio San Felipe Áportol",
      },
      {
        title: "Cliente : ",
        desc: "Colegio San Felipe Ápostol",
      },
      {
        title: "Desarrollado en : ",
        desc: "Wordpress",
      },
      {
        title: "Preview : ",
        desc: "https://sanfelipeapostol.edu.do/",
      },
    ],
  },

  /*{
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Projecto : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Cliente : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Lenguage : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },*/
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
