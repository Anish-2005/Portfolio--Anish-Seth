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
    name: 'AgriLink: Web3-Powered Agricultural Waste Marketplace',
    description: 'Built a full-stack platform connecting farmers with industrial buyers to monetize agricultural waste. Used Aptos blockchain for waste tokenization and transaction transparency. Integrated Civic Auth for decentralized login and Gemini API for AI-based waste classification. Implemented a Live Carbon Wallet using MongoDB to track transactions and carbon credit balances.',
    tools: ['Aptos', 'Civic Auth', 'Gemini API', 'MongoDB', 'MERN', 'Web3', 'Next.js'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: crefin,
  },
  {
    id: 2,
    name: 'AI Law Consultation System',
    description: 'Developed an AI-powered chatbot that assists users with common legal queries. Aimed to simplify access to legal information for the general public. Focused on user-friendly conversational flow and scalable backend logic.',
    tools: ['AI', 'Chatbot', 'Node.js', 'Express.js', 'MongoDB', 'React', 'Next.js'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: travel,
  },
  {
    id: 3,
    name: 'NeuraMark: AI-Powered Productivity & Activity Tracker',
    description: 'Full-stack productivity tool integrating Pomodoro timer, reminders, and intelligent activity tracking. Designed a Next.js + Firebase based dashboard for visualizing productivity and behavior insights. Includes AI-generated suggestions, device usage tracking, and a clean, responsive UI.',
    tools: ['Next.js', 'Firebase', 'AI', 'React', 'Tailwind', 'Node.js'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: realEstate,
  },
  {
    id: 4,
    name: 'Chatbot-Based Ticketing System',
    description: 'Created a chatbot interface for users to raise and manage support tickets. Integrated NLP to classify queries and assign tickets to appropriate departments. Focused on improving customer service efficiency and response time.',
    tools: ['NLP', 'Chatbot', 'Node.js', 'Express.js', 'MongoDB', 'React', 'Next.js'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: ayla,
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
