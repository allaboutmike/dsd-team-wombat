"use client";

import { useState } from "react";
import Dashboard from "@/components/dashboard";
import AddUser from "@/components/add_user";
import ViewImageForAccess from "@/components/view_img_for_access";
import useDataFetcher from "@/components/useDataFetcher";
import { IncomingRequest } from "@/app/models/models";

export default function Home() {

  // State variables declaration
  const [addUserModal, setAddUserModal] = useState<Boolean>(false);
  const [incomingDeniedRequests, setIncomingDeniedRequests] = useState<IncomingRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<IncomingRequest | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Daily Visits');
  const [currentPage, setCurrentPage] = useState(1);




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

  // Custom hook for fetching requests data
  const filterDeniedRequests = (requests: IncomingRequest[]) => requests.filter(request => request.state === "MANUAL_OVERRIDE_REQUESTED")
  const deniedRequests: IncomingRequest[] | null = useDataFetcher('http://localhost:4040/access_request', filterDeniedRequests);

  // Custom hook for fetching users data
  const users = useDataFetcher('http://localhost:4040/users');

  // This function displays the view image modal for each request/visit
  const showViewImageModal = (requestId: string): void => {
    for (let request of deniedRequests!) {
      if (request.requestId = requestId) {
        console.log(request.requestId, request.approvalStatus, request.state)
        setSelectedRequest(request)
        break;
      }
    }
  }

  const closeViewImageModal = (): void => setSelectedRequest(null)


  const updateRequest = async (request: IncomingRequest): Promise<void> => {
    try {
      await fetch(`http://localhost:4040/access_request/${request.requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (selectedRequest) {
        setSelectedRequest(request);
      }
    } catch (error) {
      console.error('Error updating request:', error);
      // Handle the error, e.g., display an error message or retry updating
    }
  };

  const approveRequest = async (requestId: string): Promise<void> => {
    const request = deniedRequests.find((req) => req.requestId === requestId);

    if (!request) {
      console.error('Request not found');
      return;
    }

    // Update the request state
    request.state = "MANUAL_OVERRIDE_ACTIONED";

    try {
      // Create a PUT request to update the request in the database
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
      // Optionally, update the local state or perform other actions if needed
    } catch (error) {
      console.error('Error updating request:', error);
      // Handle the error, e.g., display an error message or retry updating
    }
  };




  // This function is responsible for pagination of the incoming requests
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRequests = deniedRequests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(deniedRequests.length / itemsPerPage);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <main className="min-h-full">
      <Dashboard activeTab={activeTab} requests={deniedRequests} users={users} currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        currentRequests={currentRequests}
        totalPages={totalPages}
        handleTabClick={handleTabClick}
        toggleAddUserModal={toggleAddUserModal}
        onOpenViewImageModal={showViewImageModal}
        selectedRequest={selectedRequest} />

      {addUserModal && <AddUser handleFileChange={handleFileChange} imageSrc={imageSrc} toggleAddUserModal={toggleAddUserModal} />}
      {selectedRequest != null && <ViewImageForAccess onCloseViewImageModal={closeViewImageModal} onApproveRequest={approveRequest} selectedRequest={selectedRequest} />}
    </main>

  );
}

