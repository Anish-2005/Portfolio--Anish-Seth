export interface Education {
  id: number;
  title: string;
  duration: string;
  institution: string;
}

export const educations: Education[] = [
  {
    id: 1,
    title: "BTech Computer Science",
    duration: "2023 - Present",
    institution: "Techno Main Salt Lake",
  },
  {
    id: 2,
    title: "Higher Secondary",
    duration: "2021 - 2023",
    institution: "St Aloysius School, Howrah",
  },
  {
    id: 3,
    title: "Secondary School",
    duration: "2010 - 2021",
    institution: "St Aloysius School, Howrah",
  }
];
