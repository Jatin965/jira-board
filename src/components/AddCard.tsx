import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { AddCardProps, Status } from "../types";

const statuses: Status[] = ["todo", "inProgress", "done"];

const AddCard: React.FC<AddCardProps> = ({ status, setCards }) => {
  const [text, setText] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [adding, setAdding] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<Status>(status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim().length || !deadline.trim().length) return;

    const newCard = {
      status: selectedStatus,
      title: text.trim(),
      id: Math.random().toString(),
      deadline,
    };

    setCards((prev) => [...prev, newCard]);
    setAdding(false);
    setText("");
    setDeadline("");
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close dialog only if clicking on the backdrop (not the form)
    if (e.currentTarget === e.target) {
      setAdding(false);
      setText("");
      setDeadline("");
    }
  };

  return (
    <>
      {adding ? (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <motion.form
            layout
            onSubmit={handleSubmit}
            className="bg-neutral-900 p-5 rounded-lg shadow-lg min-w-[40rem]"
          >
            <h2 className="mb-3 text-lg font-medium text-neutral-50">
              Add New Task
            </h2>
            <label className="block mb-1 text-sm text-neutral-200">Title</label>
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              autoFocus
              placeholder="Add new task..."
              className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
            />
            <div className="flex gap-2 mt-2">
              {" "}
              <div className="flex-1">
                <label className="block mb-1 text-sm text-neutral-200">
                  Deadline
                </label>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-sm text-neutral-200">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value as Status)}
                  className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status} className="capitalize">
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setAdding(false);
                  setText("");
                  setDeadline("");
                }}
                className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
              >
                Close
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
              >
                <span>Add</span>
                <FiPlus />
              </button>
            </div>
          </motion.form>
        </motion.div>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

export default AddCard;
