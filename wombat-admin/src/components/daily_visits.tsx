export default function DailyVisits() {
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
                      Check Out
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white">
                  <tr className="divide-x divide-zinc-200">
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
                    <td className="whitespace-nowrap p-4 text-sm font-medium text-zinc-800">
                      12345
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                      Sabina Rasulova
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                      Front-end Developer
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">
                      <span className="date">3/6/2024</span>
                      <span className="time"> 5:19</span>{" "}
                      <span className="PM/AM">PM</span>
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                      img
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-teal-500">
                      Present
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-zinc-500 sm:pr-0"></td>
                  </tr>

                  <tr className="divide-x divide-zinc-200">
                    <td className="whitespace-nowrap p-4 text-sm  text-zinc-500 flex justify-center">
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
                    <td className="whitespace-nowrap p-4 text-sm font-medium text-zinc-800">
                      15675
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                      Kenneth Blanton
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                      Full Stack Developer
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">
                      <span className="date">3/6/2024</span>
                      <span className="time"> 5:19</span>{" "}
                      <span className="PM/AM">PM</span>
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-zinc-500">
                      img
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-red-500">
                      Absent
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-zinc-500 sm:pr-0">
                      <span className="date">3/6/2024</span>
                      <span className="time"> 6:30</span>{" "}
                      <span className="PM/AM">PM</span>
                    </td>
                  </tr>

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
