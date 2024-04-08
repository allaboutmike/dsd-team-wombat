type RequestProps = {
  toggleViewImageModal: () => void;
};
export default function DailyVisits({ toggleViewImageModal }: RequestProps) {
  const users = [
    {
      name: "Sabina Rasulova",
      role: "Front-end Developer",
      checkIn: "3/6/2024 5:19 PM",
      status: "Present",
      checkOut: "",
    },
    {
      name: "Kenneth Blanton",
      role: "Full Stack Developer",
      checkIn: "3/6/2024 5:19 PM",
      status: "Absent",
      checkOut: "3/6/2024 6:30 PM",
    },
  ];

  return (
    <div>
      <div className="px-2 border rounded-md ">
        <div className="sm:flex sm:items-center"></div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-zinc-300">
                <thead>
                  <tr className="divide-x divide-zinc-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-zinc-800 sm:pl-0"
                    ></th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Check Ins
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-zinc-800 sm:pr-0"
                    >
                      Last Active
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white">
                  {users.map((user, i) => {
                    return (
                      <tr key={i}>
                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500 flex justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                          </svg>
                        </td>
                        <td className="pl-4 pr-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">
                          {i + 1}
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">
                          {user.name}
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">
                          {user.role}
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">
                          {user.checkIn}
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">
                          <button
                            type="button"
                            className="text-white bg-teal-600 px-3 py-2 rounded-md hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            onClick={toggleViewImageModal}
                          >
                            View Image
                          </button>
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">
                          {user.status}
                        </td>
                        <td className="px-3 py-3.5 whitespace-nowrap text-sm text-zinc-800">
                          {user.checkOut}
                        </td>
                      </tr>
                    );
                  })}

                  {/* <!-- More people... --> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
