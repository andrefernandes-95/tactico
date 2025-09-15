import React, { useState } from "react";
import Player from "../player/player";

type PlayerType = {
  id: number;
  xPercent: number;
  yPercent: number;
  color: string;
};

type FootballPitchProps = {
  initialPlayers: PlayerType[];
};

const FootballPitch = ({ initialPlayers }: FootballPitchProps) => {
  const [players, setPlayers] = useState<PlayerType[]>(initialPlayers);

  const handleMove = (id: number, xPercent: number, yPercent: number) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, xPercent, yPercent } : p))
    );
  };

  return (
    <div className="w-screen h-screen bg-green-700 relative" id="pitch">
      {/* Midline */}
      <div className="absolute top-0 left-1/2 transform -translate-x-0.5 w-1 h-full bg-white" />

      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full w-40 h-40" />

      {/* Players */}
      {players.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          color={player.color}
          x={player.xPercent}
          y={player.yPercent}
          onMove={handleMove}
        />
      ))}
    </div>
  );
};

export default FootballPitch;
