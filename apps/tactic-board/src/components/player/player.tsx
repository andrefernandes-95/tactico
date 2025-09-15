import { useState, useEffect } from "react";

type PlayerProps = {
  id: number;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  color: string;
  onMove: (id: number, xPercent: number, yPercent: number) => void;
};

const Player = ({ id, x, y, color, onMove }: PlayerProps) => {
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;

      const parent = document.getElementById("pitch") as HTMLDivElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      let newXPercent = ((e.clientX - rect.left) / rect.width) * 100;
      let newYPercent = ((e.clientY - rect.top) / rect.height) * 100;

      newXPercent = Math.min(100, Math.max(0, newXPercent));
      newYPercent = Math.min(100, Math.max(0, newYPercent));

      onMove(id, newXPercent, newYPercent);
    };

    const handleMouseUp = () => {
      if (dragging) setDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, id, onMove]);

  return (
    <div
      id={`player-${id}`}
      className="
        absolute w-10 h-10 rounded-full flex items-center justify-center 
        text-white font-bold cursor-pointer select-none
        transition-transform duration-200
        hover:scale-110 hover:shadow-lg
      "
      style={{
        left: `${x}%`,
        top: `${y}%`,
        backgroundColor: color,
        transform: "translate(-50%, -50%)",
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        setDragging(true);
      }}
    >
      {id}
    </div>
  );
};

export default Player;
