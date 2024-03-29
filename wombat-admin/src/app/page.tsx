import Image from "next/image";
import Dashboard from "@/components/dashboard";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-full">
      <Navbar />
      <Dashboard />
    </main>



  );
}
