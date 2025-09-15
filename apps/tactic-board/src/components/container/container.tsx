import FootballPitch from "../football-pitch/football-pitch";

const blueTeam = [
  { id: 1, xPercent: 10, yPercent: 50, color: "blue" }, // GK
  { id: 2, xPercent: 20, yPercent: 15, color: "blue" },
  { id: 3, xPercent: 20, yPercent: 35, color: "blue" },
  { id: 4, xPercent: 20, yPercent: 65, color: "blue" },
  { id: 5, xPercent: 20, yPercent: 85, color: "blue" },
  { id: 6, xPercent: 30, yPercent: 15, color: "blue" },
  { id: 7, xPercent: 30, yPercent: 35, color: "blue" },
  { id: 8, xPercent: 30, yPercent: 65, color: "blue" },
  { id: 9, xPercent: 30, yPercent: 85, color: "blue" },
  { id: 10, xPercent: 40, yPercent: 35, color: "blue" },
  { id: 11, xPercent: 40, yPercent: 65, color: "blue" },
];

const redTeam = [
  { id: 12, xPercent: 90, yPercent: 50, color: "red" }, // GK
  { id: 13, xPercent: 80, yPercent: 15, color: "red" },
  { id: 14, xPercent: 80, yPercent: 35, color: "red" },
  { id: 15, xPercent: 80, yPercent: 65, color: "red" },
  { id: 16, xPercent: 80, yPercent: 85, color: "red" },
  { id: 17, xPercent: 70, yPercent: 15, color: "red" },
  { id: 18, xPercent: 70, yPercent: 35, color: "red" },
  { id: 19, xPercent: 70, yPercent: 65, color: "red" },
  { id: 20, xPercent: 70, yPercent: 85, color: "red" },
  { id: 21, xPercent: 60, yPercent: 35, color: "red" },
  { id: 22, xPercent: 60, yPercent: 65, color: "red" },
];

const initialPlayers = [...blueTeam, ...redTeam];

export default function Container() {
  return <FootballPitch initialPlayers={initialPlayers} />;
}
