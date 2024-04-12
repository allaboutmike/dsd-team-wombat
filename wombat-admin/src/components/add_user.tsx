import Image from "next/image";

import wombat from "../../public/david-clode-BSXdD5MawH4-unsplash.jpg";

type AddUserProps = {
  toggleAddUserModal: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageSrc: string | null;

};

export default function AddUser({
  toggleAddUserModal,
  handleFileChange,
  imageSrc,
}: AddUserProps) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0 ">
          <form className="bg-white shadow-sm ring-1 ring-zinc-800/5 sm:rounded-md md:col-span-2">
            <h3 className=" px-4 py-6 sm:p-8 sm:pt-6 sm:pb-0 text-xl font-medium leading-6 text-red-400 text-end">
              Add User
            </h3>
            <div className="px-4 py-4 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-6 ">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="ID"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    ID
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="ID"
                      id="ID"
                      autoComplete="ID"
                      className="block w-full rounded-md border-0 py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    Department
                  </label>
                  <div className="mt-2">
                    <select
                      id="department"
                      name="department"
                      autoComplete="department-name"
                      className="block w-full rounded-md border-0 py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>HR</option>
                      <option>Sales</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    Role
                  </label>
                  <div className="mt-2">
                    <select
                      id="role"
                      name="role"
                      autoComplete="role-name"
                      className="block w-full rounded-md border-0 py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Front End Dev</option>
                      <option>Back End Dev</option>
                      <option>Manager</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-3 flex flex-col">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex-grow">
                    <Image
                      src={imageSrc ?? wombat}
                      width={64}
                      height={96}
                      alt="wombat picture"
                      className="rounded-lg h-auto w-full"
                    />
                  </div>
                </div>

                <div className="col-span-3 flex flex-col">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-zinc-800">Upload photo</label>
                  <div className="mt-2 flex-grow flex justify-center rounded-lg border border-dashed border-zinc-800/25 px-6 py-10">
                    <div className="text-center">
                      <svg className="mx-auto h-12 w-12 text-zinc-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-zinc-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-red-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-teal-600 focus-within:ring-offset-2 hover:text-red-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-zinc-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="registeredByAdmin"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    Registered by Admin
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="registeredByAdmin"
                      id="registeredByAdmin"
                      autoComplete="registeredByAdmin"
                      className="block w-full rounded-md border-0 py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="registerTime"
                    className="block text-sm font-medium leading-6 text-zinc-800"
                  >
                    Registered at
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="registerTime"
                      id="registerTime"
                      autoComplete="registerTime"
                      className="block w-full rounded-md border-0 py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-x-4 border-t border-zinc-800/10 px-4 py-4 sm:px-8">
              <button
                type="button"
                className="rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                onClick={toggleAddUserModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
