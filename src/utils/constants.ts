import { Card } from "../types";

export const DEFAULT_CARDS: Card[] = [
  // TODO
  {
    title: "Hire Jatin Saini - Amazing Frontend Engineer",
    id: "1",
    status: "todo",
    deadline: "2024-10-10",
  },
  {
    title: "Plan an outing with Jatin",
    id: "2",
    status: "todo",
    deadline: "2024-10-15",
  },
  { title: "Issue an Offer letter to Jatin", id: "3", status: "todo", deadline: "2024-10-20" },

  // IN PROGRESS
  {
    title: "Last round of interview for Jatin.",
    id: "4",
    status: "inProgress",
    deadline: "2024-10-25",
  },
  {
    title: "Gauging technical skills of Jatin",
    id: "5",
    status: "inProgress",
    deadline: "2024-10-30",
  },
  {
    title: "Getting impressed by Jatin's technical skills",
    id: "6",
    status: "inProgress",
    deadline: "2024-11-05",
  },
  {
    title: "Appreciating Jatin's innovative approach for self advertising",
    id: "7",
    status: "inProgress",
    deadline: "2024-11-10",
  },

  {
    title: "Inviting Jatin for next round of interview",
    id: "8",
    status: "inProgress",
    deadline: "2024-11-15",
  },

  // DONE
  {
    title: "Impressed by Jatin's Skills and Innovative approach",
    id: "9",
    status: "done",
    deadline: "2024-11-20",
  },

  {
    title: "Invited Jatin for next round of interview",
    id: "10",
    status: "done",
    deadline: "2024-11-25",
  },
];
