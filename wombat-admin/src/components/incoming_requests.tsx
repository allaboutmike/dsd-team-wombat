import { IncomingRequest } from "@/app/models/models";
import React from "react";

type RequestProps = {
  onOpenViewImageModal: (requestId: string) => void;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  currentRequests: IncomingRequest[];
  totalPages: number;
};

export default function IncomingRequests({ currentPage, nextPage, prevPage, currentRequests, totalPages, onOpenViewImageModal }: RequestProps) {

  return (
    <div>
      <h2 className="text-lg font-semibold leading-6 text-zinc-700 mb-8">Requests</h2>

      <div className="px-4 sm:px-6 lg:px-8 border rounded-md py-4">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-zinc-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-zinc-800 sm:pl-0">Request ID</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800">User ID</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800">Status</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800">Check In</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800">Image</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {currentRequests.map((request: IncomingRequest) => {
                    return (
                      <tr key={request.requestId}>
                        <td className="py-3.5 whitespace-nowrap text-sm text-zinc-800">{request.requestId.substring(0, 3)}</td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">{request.userId}</td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">{request.approvalStatus}</td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">{request.date}</td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">
                          <button
                            type="button"
                            className="text-white font-medium bg-teal-600 px-2.5 py-1.5 rounded-md hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            onClick={() => onOpenViewImageModal(request.requestId)}
                          >
                            View Image
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1.5 text-sm bg-zinc-200 text-zinc-600 rounded-md"
        >
          Previous
        </button>
        <div className="text-zinc-600">{`Page ${currentPage} of ${totalPages}`}</div>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 text-sm bg-zinc-200 text-zinc-600 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
