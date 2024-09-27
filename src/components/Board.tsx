import React, { useState } from "react";
import Column from "./Column";
//import BurnBarrel from "./BurnBarrel";
import { DEFAULT_CARDS } from "../utils/constants";
import { Card, Status } from "../types";

const Board: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(DEFAULT_CARDS);

  const columns: { title: string; status: Status; headingColor: string }[] = [
    { title: "TODO", status: "todo", headingColor: "text-yellow-200" },
    { title: "IN PROGRESS", status: "inProgress", headingColor: "text-blue-200" },
    { title: "DONE", status: "done", headingColor: "text-emerald-200" },
  ];

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
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
      {/*<BurnBarrel setCards={setCards} />*/}
    </div>
  );
};

export default Board;
