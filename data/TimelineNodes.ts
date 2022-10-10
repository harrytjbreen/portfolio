import { TimelineNode } from "../model/TimelineNode";

export default [
  {
    id: 2,
    date: new Date(2019, 9),
    caption: "Marling Application Project",
    bullets: [
      "Led a team of students building a React application for prospective students of Marling ",
      "First introduction to AWS as we used SES to send confirmation Emails",
      "I was largely in charge of building forms using Class based React components",
      "I was responsible for ensuring the the functionality and styling of the project met the schools standards",
    ],
  },
  {
    id: 3,
    date: new Date(2020, 8),
    caption: "Apprentice Data Scientist - Raytheon",
    bullets: [],
  },
  {
    id: 4,
    date: new Date(2021, 5),
    caption: "Apprentice Web Developer - Raytheon",
    bullets: [],
  },
  {
    id: 5,
    date: new Date(2022, 6),
    caption: "Frontend Developer - Osprey Charging",
    bullets: ["I used Vue and Quasar to work on Osprey's Mobile app"],
  },
] as TimelineNode[];
