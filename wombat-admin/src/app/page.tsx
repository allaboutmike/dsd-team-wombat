"use client";

import { useState, useCallback } from "react";
import Dashboard from "@/components/dashboard";
import AddUser from "@/components/add_user";
import ViewImageForAccess from "@/components/view_img_for_access";
import { IncomingRequest, User } from "@/app/models/models";
import useFetchData from "./util/useFetchData";


export default function Home() {

  // State variables declaration
  const [addUserModal, setAddUserModal] = useState<Boolean>(false);
  const [selectedRequest, setSelectedRequest] = useState<IncomingRequest | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Daily Visits');
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const [incomingDeniedRequests, setIncomingDeniedRequests] = useState<IncomingRequest[]>([]);

  const URL = "http://localhost:4040";
  const accessPath = "access_request";
  const usersPath = "users"

  // Get the list of the incoming request with state 
  const updateIncomingDeniedRequests = useCallback((jsonData: IncomingRequest[]) => {
    setIncomingDeniedRequests(jsonData);
  }, [setIncomingDeniedRequests]);

  useFetchData(URL, accessPath, updateIncomingDeniedRequests)

  const manualOverridenRequests: IncomingRequest[] = incomingDeniedRequests.filter(r => r.state === "MANUAL_OVERRIDE_REQUESTED");


  // Memoize setUsers using useCallback
  const updateUserList = useCallback((jsonData: User[]) => {
    setUsers(jsonData);
  }, [setUsers]);

  // useFetchData custom hook to fetch users data
  useFetchData(URL, usersPath, updateUserList);


  // Button click to show the "Add User Modal"
  const toggleAddUserModal = () => {
    setAddUserModal((prev) => !prev);
  };

  //  This function allows admin to upload a new image for the user from their computer
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

  // This function allows to navigate between Daily Visits and User Audit Trail tabs
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };


  // This function displays the view image modal for each request/visit
  const showViewImageModal = (requestId: string): void => {
    for (let request of manualOverridenRequests!) {
      if (request.requestId === requestId) {
        setSelectedRequest(request)
        break;
      }
    }
  }

  const closeViewImageModal = (): void => setSelectedRequest(null)


  const approveRequest = async (requestId: string) => {
    const request = manualOverridenRequests.find((req) => req.requestId === requestId);

    if (!request) {
      console.error(`Request with ID ${requestId} not found.`);
      return;
    }

    const reqsBody = { state: 'MANUAL_OVERRIDE_ACTIONED', approvalStatus: "DENIED", date: request.date };

    try {
      const response = await fetch(`${URL}/${accessPath}/${requestId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(reqsBody)
      });

      if (!response.ok) {
        throw new Error(`Failed to update request with ID ${requestId}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };


  // This function is responsible for pagination of the incoming requests
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRequests = manualOverridenRequests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(manualOverridenRequests.length / itemsPerPage);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <main className="min-h-full">
      <Dashboard activeTab={activeTab} requests={manualOverridenRequests} users={users} currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        currentRequests={currentRequests}
        totalPages={totalPages}
        handleTabClick={handleTabClick}
        toggleAddUserModal={toggleAddUserModal}
        onOpenViewImageModal={showViewImageModal}
        selectedRequest={selectedRequest} />

      {addUserModal && <AddUser handleFileChange={handleFileChange} imageSrc={imageSrc} toggleAddUserModal={toggleAddUserModal} />}
      {selectedRequest && <ViewImageForAccess onCloseViewImageModal={closeViewImageModal} onApproveRequest={approveRequest} selectedRequest={selectedRequest} />}
    </main>

  );
}

