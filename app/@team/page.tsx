import React from "react";
import delay from "@/lib/ultils";
const Team = async () => {
  await delay(3000);
  return (
    <div className="p-6 rounded bg-pink-500  h-96 w-1/2">
      <h2>Team Slot</h2>
    </div>
  );
};

export default Team;
