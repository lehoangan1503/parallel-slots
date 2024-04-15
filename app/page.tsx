import Image from "next/image";
import delay from "@/lib/ultils";
export default async function Home() {
  await delay(1000);
  return (
    <div className="container mx-auto p-10 rounded bg-purple-500 w-5/6">
      <h2 className="font-sans  text-2xl">Parallel Routes</h2>
    </div>
  );
}
