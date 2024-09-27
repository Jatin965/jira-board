import React from "react";
import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";
import { CardProps } from "../types";

interface CardComponentProps extends CardProps {
  onClick: () => void;
}

const Card: React.FC<CardComponentProps> = ({
  title,
  id,
  status,
  deadline,
  handleDragStart,
  onClick,
}) => {
  return (
    <>
      <DropIndicator beforeId={id} status={status} />
      <motion.div
        layout
        layoutId={id}
        draggable
        onDragStart={(e) =>
          handleDragStart(e as unknown as React.DragEvent<HTMLDivElement>, {
            title,
            id,
            status,
            deadline,
          })
        }
        onClick={onClick}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
        <p className="text-xs text-neutral-400">Deadline: {deadline}</p>
      </motion.div>
    </>
  );
};

export default Card;
