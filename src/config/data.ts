interface projects {
  name: string;
  id: string;
  type: string;
  description: string;
  date: string;
  href: string;
}

export const projects: projects[] = [
  {
    id: "1",
    name: "CS Activities",
    type: "Engineering",
    description: "Senior capstone website where all the activities made.",
    date: "2024",
    href: "https://cs-activities-capstone.vercel.app/",
  },
  {
    id: "2",
    name: "Professor Portfolio Website",
    type: "Engineering",
    description:
      "Developed a simple portfolio website for my professor and her students projects.",
    date: "2024",
    href: "https://ccbudwell.vercel.app/",
  },
  {
    id: "3 ",
    name: "Duo Sing",
    type: "Design",
    description: "An experimental hands free experience for the duolingo app.",
    date: "2023",
    href: "https://www.figma.com/design/v7dkT9wcwAHRo5DDWmuJtE/Nana-x-Liv?node-id=1717-4921&t=WBNJuxXL2LdmvxQW-1",
  },
  {
    id: "4",
    name: "Campus Creators",
    type: "Design",
    date: "2023",
    description:
      "A web platform for students who share their skills with others in their campus community.",
    href: "https://www.figma.com/design/MMlCgHTZvmKwnmHI1tiqQL/2-dolla-sign?node-id=0-1&t=uVwkP7zGtrDJy66I-1",
  },
  {
    id: "5",
    name: "Securitea",
    type: "Engineering",
    description:
      "A web platform to make company security training more interactive and fun.",
    date: "2022",
    href: "https://github.com/Salesforce-FTL-Capstone-Pod/Securitea",
  },
];
