export type Status = 'todo' | 'inProgress' | 'done';

export interface Card {
  id: string;
  title: string;
  status: Status;
  deadline: string; // ISO date string
}

export interface ColumnProps {
  title: string;
  status: Status;
  headingColor: string;
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

export interface CardProps extends Card {
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, card: Card) => void;
}

export interface AddCardProps {
  status: Status;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

export interface BurnBarrelProps {
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

export interface DropIndicatorProps {
  beforeId: string | null;
  status: Status;
}
