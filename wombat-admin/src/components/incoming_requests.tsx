import Image from "next/image";

type RequestProps = {
  toggleViewImageModal: () => void;
};

const users = [
  {
    name: "Sabina Rasulova",
    role: "Front-end Developer",
    checkIn: "3/6/2024 5:19 PM",
  },
  {
    name: "Kenneth Blanton",
    role: "Front-end Developer",
    checkIn: "3/6/2024 5:19 PM",
  },
  { name: "Grace Joh", role: "Software Engineer", checkIn: "3/6/2024 5:19 PM" },
];

export default function IncomingRequests({
  toggleViewImageModal,
}: RequestProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold leading-6 text-zinc-700 mb-8">
        Requests
      </h2>

      <div className="px-4 sm:px-6 lg:px-8 border rounded-md py-4">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-zinc-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-zinc-800 sm:pl-0"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Check In
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800"
                    >
                      Image
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {users.map((user, i) => {
                    return (
                      <tr key={i}>
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
