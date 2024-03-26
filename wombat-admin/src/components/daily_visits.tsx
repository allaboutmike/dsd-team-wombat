export default function DailyVisits() {
    return (
        <div>
            <h1 className="text-lg font-semibold leading-6 text-zinc-800 mt-10 mb-4">Reports</h1>

            {/* Tabs */}

            {/* <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
--> */}
            <div>
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">Select a tab</label>
                    {/* <!-- Use an "onChange" listener to redirect the user to the selected tab URL. --> */}
                    <select id="tabs" name="tabs" className="block w-full rounded-md border-zinc-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option>Daily Visits</option>
                        <option>User Audit Trail</option>
                        <option selected>Statistics</option>

                    </select>
                </div>
                <div className="hidden sm:block">
                    <div className="border-b border-zinc-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700" --> */}
                            <a href="#" className="border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Daily Visits</a>
                            <a href="#" className="border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">User Audit Trail</a>
                            <a href="#" className="border-teal-500 text-teal-600 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" aria-current="page">Statistics</a>

                        </nav>
                    </div>
                </div>
            </div>



            <div className="px-4 sm:px-6 lg:px-8 border rounded-md ">
                <div className="sm:flex sm:items-center">
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-zinc-300">
                                <thead>
                                    <tr className="divide-x divide-zinc-200">
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-zinc-800 sm:pl-0">ID</th>
                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800">Name</th>
                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800">Role</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800">Check Ins</th>
                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800">Image</th>
                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-zinc-800">Status</th>
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-zinc-800 sm:pr-0">Check Out</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-200 bg-white">
                                    <tr className="divide-x divide-zinc-200">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-zinc-800 sm:pl-0">12345</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">Sabina Rasulova</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">Front-end Developer</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500"><span className="date">3/6/2024</span><span className="time">  5:19</span> <span className="PM/AM">PM</span></td>
                                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">img</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-teal-500">Present</td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-zinc-500 sm:pr-0"></td>
                                    </tr>

                                    <tr className="divide-x divide-zinc-200">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-zinc-800 sm:pl-0">15675</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">Kenneth Blanton</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">Full Stack Developer</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500"><span className="date">3/6/2024</span><span className="time">  5:19</span> <span className="PM/AM">PM</span></td>
                                        <td className="whitespace-nowrap p-4 text-sm text-zinc-500">img</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-red-500">Absent</td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-zinc-500 sm:pr-0"><span className="date">3/6/2024</span><span className="time">  6:30</span> <span className="PM/AM">PM</span></td>
                                    </tr>

                                    {/* <!-- More people... --> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}