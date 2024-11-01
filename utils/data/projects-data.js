import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Chatbot Based Ticketing System',
        description: "chatbot-based ticketing system enables seamless museum bookings through an intuitive, multilingual interface. It offers features like AR, QR validation, and sales predictions, enhancing user experience with real-time support and accessibility.",
        tools: ['Django', 'MongoDB', 'React JS', 'Tailwind', 'Google Translation API', 'Google Dialogflow', 'Python', 'FAST API'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Law Consultation AI',
        description: 'Law AI project provides quick legal insights and guidance, offering accessible, multilingual support to streamline case research and document analysis. It enhances decision-making, automates document processing, and ensures compliance, creating an efficient, user-friendly legal tool.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'College Management System',
        description: ' college management system simplifies administration with centralized access to student records, course management, attendance, and fee tracking. It improves communication, automates routine tasks, and provides real-time insights, enhancing efficiency for students, faculty, and administrators alike.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Express', 'JavaScript', 'MongoDB', 'Indian Kanoon API', 'Web Scrapper'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },