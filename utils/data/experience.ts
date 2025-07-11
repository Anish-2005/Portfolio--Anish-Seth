export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "AWS Cloud Virtual Internship – AICTE (2024)",
    company: "Cloud Foundations: Gained understanding of core cloud computing concepts and AWS global infrastructure. Hands-On Practice: Deployed and managed cloud applications using EC2, S3, Lambda, and IAM. Security & Identity: Learned best practices for securing applications and managing user access. Structured Learning: Completed curated modules and lab exercises through AWS Academy and AICTE.",
    duration: "Oct 2024 - Dec 2024"
  },
  {
    id: 2,
    title: "Google AI/ML Virtual Internship  AICTE (2025)",
    company: "AI/ML Foundations: Learned core concepts in Artificial Intelligence and Machine Learning. Hands-On Projects: Gained practical experience in model training, data preprocessing, and evaluation techniques. Ethical AI: Understood the importance of fairness, transparency, and responsibility in AI systems. Structured Curriculum: Completed modules and assignments curated by Google in partnership with AICTE.",
    duration: "Jan 2025 - Mar 2025"
  }
];
