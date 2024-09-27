import React from "react";
import CardComponent from "./Card";
import AddCard from "./AddCard";
import DropIndicator from "./DropIndicator";
import { ColumnProps } from "../types";
import { useDragHandlers } from "../utils/helpers";

const Column: React.FC<ColumnProps> = ({
  title,
  headingColor,
  cards,
  status,
  setCards,
}) => {
  const { handleDragStart, handleDragEnd, handleDragOver, handleDragLeave, active } =
    useDragHandlers({ cards, status, setCards });

  const filteredCards = cards.filter((c) => c.status === status);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => (
          <CardComponent key={c.id} {...c} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId={null} status={status} />
        <AddCard status={status} setCards={setCards} />
      </div>
    </div>
  );
};

export default Column;
