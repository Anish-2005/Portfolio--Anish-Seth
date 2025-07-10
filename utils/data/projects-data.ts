import { StaticImageData } from 'next/image';
import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export interface ProjectData {
  id: number;
  name: string;
  description: string;
  tools: string[];
  role: string;
  code: string;
  demo: string;
  image: StaticImageData;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    name: 'Chatbot Based Ticketing System',
    description: "A sophisticated chatbot-based ticketing system that enables seamless museum bookings through an intuitive, multilingual interface. It offers features like AR integration, QR validation, and sales predictions, enhancing user experience with real-time support and accessibility.",
    tools: ['Django', 'MongoDB', 'React JS', 'Tailwind CSS', 'Google Translation API', 'Google Dialogflow', 'Python', 'FastAPI'],
    role: 'Frontend Developer',
    code: '',
    demo: '',
    image: crefin,
  },
  {
    id: 2,
    name: 'Law Consultation AI',
    description: 'An intelligent Law AI project that provides quick legal insights and guidance, offering accessible, multilingual support to streamline case research and document analysis. It enhances decision-making, automates document processing, and ensures compliance, creating an efficient, user-friendly legal tool.',
    tools: ['React', 'Bootstrap', 'SCSS', 'Express.js', 'JavaScript', 'MongoDB', 'Indian Kanoon API', 'Web Scraper'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: travel,
  },
  {
    id: 3,
    name: 'College Management System',
    description: 'A comprehensive college management system that simplifies administration with centralized access to student records, course management, attendance tracking, and fee management. It improves communication, automates routine tasks, and provides real-time insights, enhancing efficiency for students, faculty, and administrators alike.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    code: '',
    role: 'Full Stack Developer',
    demo: '',
    image: realEstate,
  }
];

// Template for adding new projects
// {
//     id: 4,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: ayla,
// },
