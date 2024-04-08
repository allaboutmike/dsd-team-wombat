"use client";

import Image from "next/image";
import { useState } from "react";
import Dashboard from "@/components/dashboard";
import Navbar from "@/components/navbar";
import AddUser from "@/components/add_user";
import ViewImageForAccess from "@/components/view_img_for_access";

export default function Home() {
  const [addUserModal, setAddUserModal] = useState(false);
  const [viewImageModal, setViewImageModal] = useState(false);

  const toggleAddUserModal = () => {
    setAddUserModal((prev) => !prev);
  };

  const toggleViewImageModal = () => {
    setViewImageModal((prev) => !prev);
  };

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Dashboard
        toggleAddUserModal={toggleAddUserModal}
        toggleViewImageModal={toggleViewImageModal}
      />
      {addUserModal && (
        <AddUser
          handleFileChange={handleFileChange}
          imageSrc={imageSrc}
          toggleAddUserModal={toggleAddUserModal}
        />
      )}
      {viewImageModal && (
        <ViewImageForAccess toggleViewImageModal={toggleViewImageModal} />
      )}
    </>
  );
}
