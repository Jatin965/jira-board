import React from "react";
import { motion } from "framer-motion";
import { Card } from "../types";
import { getStatusStyles } from "../utils/helpers";

interface CardDetailDialogProps {
  card: Card | null;
  onClose: () => void;
}

const CardDetailDialog: React.FC<CardDetailDialogProps> = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-neutral-900 p-5 rounded-lg shadow-lg min-w-[40rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-3 text-lg font-medium text-neutral-50">{card.title}</h2>
        <p className="text-sm text-neutral-200">Deadline: {card.deadline}</p>
        <p className={`text-sm mt-4 mb-2`}>
          Status:{" "}
          <span className={`rounded p-2 capitalize ${getStatusStyles(card.status)}`}>{card.status}</span>
        </p>
        <button
          onClick={onClose}
          className="mt-4 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CardDetailDialog;
