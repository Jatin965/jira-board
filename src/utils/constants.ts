import { Card } from "../types";

export const DEFAULT_CARDS: Card[] = [
  // TODO
  {
    title: "Look into render bug in dashboard",
    id: "1",
    status: "todo",
    deadline: "2024-10-10",
  },
  {
    title: "SOX compliance checklist",
    id: "2",
    status: "todo",
    deadline: "2024-10-15",
  },
  { title: "Migrate to Azure", id: "3", status: "todo", deadline: "2024-10-20" },

  // IN PROGRESS
  {
    title: "Document Notifications service",
    id: "4",
    status: "inProgress",
    deadline: "2024-10-25",
  },
  {
    title: "Research DB options for new microservice",
    id: "5",
    status: "inProgress",
    deadline: "2024-10-30",
  },
  {
    title: "Postmortem for outage",
    id: "6",
    status: "inProgress",
    deadline: "2024-11-05",
  },
  {
    title: "Sync with product on Q3 roadmap",
    id: "7",
    status: "inProgress",
    deadline: "2024-11-10",
  },

  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    status: "inProgress",
    deadline: "2024-11-15",
  },

  // DONE
  {
    title: "Add logging to daily CRON",
    id: "9",
    status: "done",
    deadline: "2024-11-20",
  },

  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    status: "done",
    deadline: "2024-11-25",
  },
];
