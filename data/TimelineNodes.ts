import { TimelineNode } from "../model/TimelineNode";

export default [
  {
    id: 2,
    date: new Date(2019, 9),
    caption: "Marling School Application Project",
    bullets: [
      "Led a team of students building a React application for prospective students of Marling School. ",
      "First introduction to AWS as we used SES to send confirmation Emails.",
      "I was largely in charge of building forms using Class based React components.",
      "I was responsible for ensuring the the functionality and styling of the project met the school's requirements.",
    ],
  },
  {
    id: 3,
    date: new Date(2020, 8),
    caption: "Apprentice Data Scientist - Raytheon",
    bullets: [""],
  },
  {
    id: 4,
    date: new Date(2021, 5),
    caption: "Apprentice Web Developer - Raytheon",
    bullets: [
      "I was responsible for creating new functionality within a Vue application.",
      "I ensured that, for every piece of code that I wrote, the relevant unit and e2e tests were written.",
      "On occasion wrote some backend code in Flask and ensured that the relevant Swagger Documentation was created.",
    ],
  },
  {
    id: 5,
    date: new Date(2022, 6),
    caption: "Frontend Developer - Osprey Charging",
    bullets: [
      "I used Vue and Quasar to work on Osprey's Mobile app",
      "I was responsible for testing the app with the Product team and deploying new versions of the app to the app stores.",
      "While at Osprey I worked as a scrum master for a team of 9, this involved leading daily standups and retrospectives, and ensuring that the team was working efficiently.",
    ],
  },
] as TimelineNode[];
