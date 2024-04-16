// "use client";

// import { useState } from "react";
// import Dashboard from "@/components/dashboard";
// import AddUser from "@/components/add_user";
// import ViewImageForAccess from "@/components/view_img_for_access";
// import useDataFetcher from "@/components/useDataFetcher";
// import { IncomingRequest } from "@/app/models/models";

// export default function Home() {

//   // State variables declaration
//   const [addUserModal, setAddUserModal] = useState<Boolean>(false);
//   const [viewImageModal, setViewImageModal] = useState<Boolean>(false);
//   const [imageSrc, setImageSrc] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState<string>('Daily Visits');
//   const [currentPage, setCurrentPage] = useState(1);



//   // Button click to show the "Add User Modal"
//   const toggleAddUserModal = () => {
//     setAddUserModal((prev) => !prev);
//   };

//   // Button click to show "View User Image Modal"
//   const toggleViewImageModal = () => {
//     setViewImageModal((prev) => !prev);
//   };


//   //  This function allows admin to upload a new image for the user from their computer
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImageSrc(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // This function allows to navigate between Daily Visits and User Audit Trail tabs
//   const handleTabClick = (tabName: string) => {
//     setActiveTab(tabName);
//   };

//   // Custom hook for fetching requests data
//   const filterDeniedRequests = (requests: IncomingRequest[]) => requests.filter(request => request.state === "MANUAL_OVERRIDE_REQUESTED")
//   const deniedRequests = useDataFetcher('http://localhost:4040/access_request', filterDeniedRequests);
//   // Custom hook for fetching users data
//   const users = useDataFetcher('http://localhost:4040/users');


//   // This function is responsible for pagination of the incoming requests
//   const itemsPerPage = 3;
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentRequests = deniedRequests.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(deniedRequests.length / itemsPerPage);
//   const nextPage = () => setCurrentPage(currentPage + 1);
//   const prevPage = () => setCurrentPage(currentPage - 1);

//   return (
//     <main className="min-h-full">
//       <Dashboard activeTab={activeTab} requests={deniedRequests} users={users} currentPage={currentPage}
//         nextPage={nextPage}
//         prevPage={prevPage}
//         currentRequests={currentRequests}
//         totalPages={totalPages}
//         handleTabClick={handleTabClick}
//         toggleAddUserModal={toggleAddUserModal}
//         toggleViewImageModal={toggleViewImageModal} />
//       {addUserModal && <AddUser handleFileChange={handleFileChange} imageSrc={imageSrc} toggleAddUserModal={toggleAddUserModal} />}
//       {viewImageModal && <ViewImageForAccess toggleViewImageModal={toggleViewImageModal} />}
//     </main>

//   );
// }

"use client"

// Home Component

import { useState, useEffect } from "react";
import Dashboard from "@/components/dashboard";
import AddUser from "@/components/add_user";
import ViewImageForAccess from "@/components/view_img_for_access";
import useDataFetcher from "@/components/useDataFetcher";
import { IncomingRequest } from "@/app/models/models";

export default function Home() {
  const [addUserModal, setAddUserModal] = useState<boolean>(false);
  const [viewImageModal, setViewImageModal] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Daily Visits');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [deniedRequests, setDeniedRequests] = useState<IncomingRequest[]>([]);

  const toggleAddUserModal = () => {
    setAddUserModal(prev => !prev);
  };


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

  const users = useDataFetcher('http://localhost:4040/users');

  const filterDeniedRequests = (requests: IncomingRequest[]) =>
    requests.filter(request => request.state === "MANUAL_OVERRIDE_REQUESTED");
  const fetchedDeniedRequests = useDataFetcher(
    "http://localhost:4040/access_request",
    filterDeniedRequests
  );

  useEffect(() => {
    setDeniedRequests(fetchedDeniedRequests);
  }, [fetchedDeniedRequests]);

  const toggleViewImageModal = (requestId: string | null) => {
    console.log("Selected Request ID:", requestId);
    setViewImageModal(prev => !prev);
    setSelectedRequestId(requestId);
  };

  const handleApprove = () => {
    console.log("Approve button clicked");
    if (selectedRequestId) {
      setDeniedRequests(prevRequests =>
        prevRequests.map(request =>
          request.requestId === selectedRequestId
            ? { ...request, state: "MANUAL_OVERRIDE_ACTIONED", approvalStatus: "APPROVED" }
            : request
        )
      );
      toggleViewImageModal(null);
    }
  };

  const handleDeny = () => {
    console.log("Deny button clicked");
    if (selectedRequestId) {
      setDeniedRequests(prevRequests =>
        prevRequests.map(request =>
          request.requestId === selectedRequestId
            ? { ...request, state: "MANUAL_OVERRIDE_TIMEOUT", approvalStatus: "DENIED" }
            : request
        )
      );
      toggleViewImageModal(null);
    }
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };



  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRequests = deniedRequests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(deniedRequests.length / itemsPerPage);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <main className="min-h-full">
      <Dashboard
        activeTab={activeTab}
        requests={deniedRequests}
        users={users}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        currentRequests={currentRequests}
        totalPages={totalPages}
        handleTabClick={handleTabClick}
        toggleAddUserModal={toggleAddUserModal}
        toggleViewImageModal={() => toggleViewImageModal(selectedRequestId)}
      />
      {addUserModal && (
        <AddUser
          handleFileChange={handleFileChange}
          imageSrc={imageSrc}
          toggleAddUserModal={toggleAddUserModal}
        />
      )}
      {viewImageModal && (
        <ViewImageForAccess
          toggleViewImageModal={() => toggleViewImageModal(selectedRequestId)}
          handleApprove={handleApprove}
          handleDeny={handleDeny}
          selectedRequestId={selectedRequestId} // Pass selectedRequestId as prop
        />
      )}
    </main>
  );
}
