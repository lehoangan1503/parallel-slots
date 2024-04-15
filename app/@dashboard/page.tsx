import React from "react";
import delay from "@/lib/ultils";
const DashBoard = async () => {
  await delay(5000);
  return (
    <div className="p-6 rounded bg-green-700 h-96 w-1/2">
      <h2>Dashboard Slot</h2>
    </div>
  );
};

export default DashBoard;
