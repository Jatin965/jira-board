import { useState } from "react";
import { Card, Status } from "../types";

interface UseDragHandlersProps {
  cards: Card[];
  status: Status;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

interface NearestIndicator {
  offset: number;
  element: HTMLElement;
}

export const useDragHandlers = ({
  cards,
  status,
  setCards,
}: UseDragHandlersProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: Card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, status };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === -1) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (
    e: React.DragEvent<HTMLDivElement>,
    indicators: HTMLElement[]
  ): NearestIndicator => {
    const DISTANCE_OFFSET = 50;

    const el = Array.from(indicators).reduce<NearestIndicator>(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = (): HTMLElement[] => {
    return Array.from(
      document.querySelectorAll(`[data-status="${status}"]`)
    ) as HTMLElement[];
  };

  return {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    active,
  };
};

// Colors

export const getStatusStyles = (status: string) => {
  switch (status) {
    case "done":
      return "bg-green-500 text-white"; 
    case "todo":
      return "bg-yellow-500 text-white"; 
    case "inProgress":
      return "bg-blue-500 text-white"; 
    default:
      return "bg-gray-500 text-white"; 
  }
};

