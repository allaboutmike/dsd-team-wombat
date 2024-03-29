"use client"

import Image from "next/image";
import { useState } from "react";
import Dashboard from "@/components/dashboard";
import Navbar from "@/components/navbar";
import AddUser from "@/components/add_user";

export default function Home() {

  const [addUserModal, setAddUserModal] = useState(false);

  const toggleAddUserModal = () => {
    setAddUserModal((prev) => !prev);
  };

  return (
    <main className="min-h-full">
      <Navbar />
      <Dashboard toggleAddUserModal={toggleAddUserModal} />
      {addUserModal && <AddUser toggleAddUserModal={toggleAddUserModal} />}

    </main>

  );
}
