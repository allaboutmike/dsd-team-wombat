import Image from "next/image";
import { IncomingRequest, User } from "@/app/models/models";

import wombat from "../../public/david-clode-BSXdD5MawH4-unsplash.jpg";

type ViewImgProps = {
  onCloseViewImageModal: () => void;
  onUpdateRequestRequest: (requestId: string, approvalStatus: 'APPROVED' | 'DENIED') => void;
  selectedRequest: IncomingRequest | null;
  users: User[];
};

export default function ViewImageForAccess({ onCloseViewImageModal, onUpdateRequestRequest, selectedRequest, users }: ViewImgProps) {

  const user = users.find((user) => user.userId === selectedRequest?.userId);
  console.log('Selected Request:', selectedRequest);
  console.log('User ID:', user?.userId);
  console.log('User Image:', user?.userImage);

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0 ">
          <form className="bg-white shadow-sm ring-1 ring-zinc-800/5 sm:rounded-md md:col-span-2">
            <h3 className="px-4 py-6 sm:p-8 sm:pb-0 text-xl font-medium leading-6 text-red-400 text-end">
              View User
            </h3>
            <div className="px-4 py-4 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-4 ">
                <div className="col-span-2 flex flex-col">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-zinc-800">
                    Uploaded Photo
                  </label>
                  <div className="mt-2 flex-grow">
                    <Image src={selectedRequest && selectedRequest.base64Image ? selectedRequest.base64Image : wombat} alt="wombat picture" className="rounded-lg h-auto w-full" width={200} height={200} />
                  </div>
                </div>


                <div className="col-span-2 flex flex-col">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    Saved Photo
                  </label>
                  <div className="mt-2 flex-grow">
                    <Image
                      src={user!.userImage}
                      alt="wombat picture"
                      className="rounded-lg h-auto w-full"
                      width={200} height={200}
                    />
                  </div>
                </div>

                <div className="col-span-1 flex flex-col">
                  <label htmlFor="userID" className="block text-sm font-medium leading-6 text-zinc-800">
                    {user!.userId}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="userID"
                      id="userID"
                      autoComplete="userID"
                      className="block w-full rounded-md border-0 py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      disabled
                    />
                  </div>
                </div>


                <div className="col-span-full flex flex-col mt-2">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-zinc-800">
                    Upload a new photo
                  </label>
                  <div className="flex-grow flex justify-center rounded-lg border border-dashed border-zinc-800/25 p-1">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-6 w-6 text-zinc-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="flex justify-center text-xs leading-6 text-zinc-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-red-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-teal-600 focus-within:ring-offset-2 hover:text-red-500"
                        >
                          <span className="text-center">Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-zinc-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-x-2 border-t border-zinc-800/10 px-4 py-4 sm:px-8">
              <button
                type="button"
                className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                onClick={() => onUpdateRequestRequest(selectedRequest!.requestId, 'DENIED')}
              >
                Deny Access
              </button>
              <button
                type="button"
                className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                onClick={() => onUpdateRequestRequest(selectedRequest!.requestId, 'APPROVED')}
              >
                Give Access
              </button>
              <button
                type="button"
                className="rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
                onClick={() => onCloseViewImageModal()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



