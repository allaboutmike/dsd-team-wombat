"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Dashboard from "@/components/dashboard";
import Navbar from "@/components/navbar";
import AddUser from "@/components/add_user";
import ViewImageForAccess from "@/components/view_img_for_access";

export default function Home() {

  const [addUserModal, setAddUserModal] = useState<Boolean>(false);
  const [viewImageModal, setViewImageModal] = useState<Boolean>(false);


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

  const [activeTab, setActiveTab] = useState<string>('Daily Visits');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };


  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4040/access_request`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setRequests(data); // Assuming API returns an array of requests
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4040/users`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data); // Assuming API returns an array of users
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRequests = requests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(requests.length / itemsPerPage);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <main className="min-h-full">
      <Navbar />
      <Dashboard activeTab={activeTab} requests={requests} users={users} currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        currentRequests={currentRequests}
        totalPages={totalPages}
        handleTabClick={handleTabClick}
        toggleAddUserModal={toggleAddUserModal}
        toggleViewImageModal={toggleViewImageModal} />
      {addUserModal && <AddUser handleFileChange={handleFileChange} imageSrc={imageSrc} toggleAddUserModal={toggleAddUserModal} />}
      {viewImageModal && <ViewImageForAccess toggleViewImageModal={toggleViewImageModal} />}
    </main>

  );
}
