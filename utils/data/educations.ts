export interface Education {
  id: number;
  title: string;
  duration: string;
  institution: string;
}

export const educations: Education[] = [
  {
    id: 1,
    title: "Bachelor in Technology",
    duration: "Aug 2023 - Present",
    institution: "Techno Main Salt Lake",
  },
  {
    id: 2,
    title: "Higher Secondary and Secondary",
    duration: "Aug 2009 - Apr 2023",
    institution: "St Aloysius School, Howrah",
  }
];
