import { IncomingRequest } from "@/app/models/models";

type RequestProps = {
  onOpenViewImageModal: (requestId: string) => void;
  selectedRequest: IncomingRequest | null;
};

export default function AuditTrail({ onOpenViewImageModal, selectedRequest }: RequestProps) {
  const users = [
    {
      name: "Aliya Rodriguez",
      role: "Full Stack Baby",
      checkIn: "4/5/2024 8:00 AM",
      status: "Present",
      checkOut: "4/5/2024 9:30 PM",
      accessType: "Default",
      accessGivenBy: "Josh",
      registeredOnDate: "2/8/2024 12:30 PM",
      registeredBy: "Noel",
    },

    {
      name: "Sabina Rasulova",
      role: "Front-end Developer",
      checkIn: "3/6/2024 9:00 AM",
      status: "Absent",
      checkOut: "3/7/2024 5:30 PM",
      accessType: "Default",
      accessGivenBy: "Josh",
      registeredOnDate: "2/8/2024 12:30 PM",
      registeredBy: "Mike",
    },
    {
      name: "Kenneth Blanton",
      role: "Full Stack Developer",
      checkIn: "4/5/2024 9:30 AM",
      status: "Present",
      checkOut: "4/5/2024 6:30 PM",
      accessType: "Manual",
      accessGivenBy: "Amanda",
      registeredOnDate: "2/8/2024 12:30 PM",
      registeredBy: "Mike",
    },
  ];

  return (
    <div>
      <div className="px-2 border rounded-md overflow-scroll ">
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
                      Access Given By
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Access Type
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
                      className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Check Out
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Registered At Date&Time
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-zinc-800 sm:pr-0"
                    >
                      Registered by Admin
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white">
                  {users.map((user, i) => {
                    return (
                      <tr key={i} className="divide-x divide-zinc-200">
                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500 flex justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                          </svg>
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-medium text-zinc-800">
                          {" "}
                          {i + 1}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                          {user.name}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                          {user.role}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                          {user.checkIn}
                        </td>
                        <td
                          className={`whitespace-nowrap px-3 py-4 text-sm ${user.accessType === "Default"
                            ? "text-teal-500"
                            : "text-red-400"
                            }`}
                        >
                          {user.accessType}
                        </td>

                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                          {user.accessGivenBy}
                        </td>
                        <td className="whitespace-nowrap p-1 text-sm">
                          {" "}
                          <button
                            type="button"
                            className="text-white bg-teal-600 px-2 py-1 rounded-md hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            onClick={() => onOpenViewImageModal(selectedRequest!.requestId)}
                          >
                            View Image
                          </button>
                        </td>

                        <td
                          className={`whitespace-nowrap px-3 py-4 text-sm ${user.status === "Present"
                            ? "text-teal-500"
                            : "text-red-400"
                            }`}
                        >
                          {user.status}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                          {user.checkOut}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                          {user.registeredOnDate}
                        </td>
                        <td className="whitespace-nowrappy-4 pl-4 pr-4 text-sm text-zinc-500 sm:pr-0">
                          {user.registeredBy}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
