import React, { useState } from "react";
import Column from "./Column";
import { DEFAULT_CARDS } from "../utils/constants";
import { Card, Status } from "../types";

const Board: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(DEFAULT_CARDS);

  const columns: { title: string; status: Status; headingColor: string }[] = [
    { title: "TODO", status: "todo", headingColor: "text-yellow-400" },
    { title: "IN PROGRESS", status: "inProgress", headingColor: "text-blue-400" },
    { title: "DONE", status: "done", headingColor: "text-emerald-400" },
  ];

  return (
    <div className="flex h-full w-[80vw] mx-auto gap-8 overflow-scroll p-12">
      {columns.map((col) => (
        <Column
          key={col.status}
          title={col.title}
          status={col.status}
          headingColor={col.headingColor}
          cards={cards}
          setCards={setCards}
        />
      ))}
    </div>
  );
};

export default Board;
