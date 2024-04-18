"use client";

import { useEffect, useState, useCallback } from "react";
import Dashboard from "@/components/dashboard";
import AddUser from "@/components/add_user";
import ViewImageForAccess from "@/components/view_img_for_access";
import useDataFetcher from "@/app/util/useDataFetcher";
import { IncomingRequest, User } from "@/app/models/models";

// TODO: move to env
const URL = 'http://localhost:4040'



export default function Home() {

  // State variables declaration
  const [addUserModal, setAddUserModal] = useState<Boolean>(false);
  const [incomingDeniedRequests, setIncomingDeniedRequests] = useState<IncomingRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<IncomingRequest | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Daily Visits');
  const [currentPage, setCurrentPage] = useState(1);

  const manualOverridenRequests = incomingDeniedRequests.filter(r => r.state === "MANUAL_OVERRIDE_REQUESTED");

  useEffect(() => {

    async function fetchData() {
      const res = await fetch(`${URL}/access_request`);
      if (!res.ok) {
        console.error(res);
        return;
      }

      const reqs: IncomingRequest[] = await res.json();
      setIncomingDeniedRequests(reqs);
    }

    fetchData();

    return () => setIncomingDeniedRequests([]);
  }, []);

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


  // Custom hook for fetching users data
  //const users = useDataFetcher('http://localhost:4040/users');
  const users: IncomingRequest[] = [];

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
      console.error('Request not found');
      return;
    }
    request.state = "MANUAL_OVERRIDE_ACTIONED";
    try {
      const response = await fetch(`http://localhost:4040/access_request/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error('Failed to update request in the database');
      }

      console.log('Request state updated successfully');

    } catch (error) {
      console.error('Error updating request:', error);

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
        currentRequests={manualOverridenRequests}
        totalPages={totalPages}
        handleTabClick={handleTabClick}
        toggleAddUserModal={toggleAddUserModal}
        onOpenViewImageModal={showViewImageModal}
        selectedRequest={selectedRequest} />

      {addUserModal && <AddUser handleFileChange={handleFileChange} imageSrc={imageSrc} toggleAddUserModal={toggleAddUserModal} />}
      {selectedRequest && <ViewImageForAccess onCloseViewImageModal={closeViewImageModal} onApproveRequest={approveRequest} selectedRequest={selectedRequest} user={users} />}
    </main>

  );
}

