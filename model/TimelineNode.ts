export interface TimelineNode {
  date: Date;
  caption: string;
  text: string;
  id: number;
}

export default [
  {
    id: 2,
    date: new Date(2019, 9),
    caption: "Started Marling Project",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
      "                Aliquam corporis deserunt dolor, doloribus dolorum ducimus ea\n" +
      "                eligendi enim ex fugit hic incidunt iusto labore quaerat\n" +
      "                quisquam similique sint velit, veniam.",
  },
  {
    id: 3,
    date: new Date(2020, 8),
    caption: "Started at Raytheon as a Data Scientist",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
      "                Aliquam corporis deserunt dolor, doloribus dolorum ducimus ea\n" +
      "                eligendi enim ex fugit hic incidunt iusto labore quaerat\n" +
      "                quisquam similique sint velit, veniam.",
  },
  {
    id: 4,
    date: new Date(2021, 5),
    caption: "Moved to Web Development at Raytheon",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
      "                Aliquam corporis deserunt dolor, doloribus dolorum ducimus ea\n" +
      "                eligendi enim ex fugit hic incidunt iusto labore quaerat\n" +
      "                quisquam similique sint velit, veniam.",
  },
  {
    id: 5,
    date: new Date(2022, 6),
    caption: "Started at Osprey Charging as a Frontend Developer",
    text: "",
  },
] as TimelineNode[];
