import Statistics from "./statistics";


export default function IncomingRequests() {
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
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-zinc-800 sm:pl-0">ID</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800">Name</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800">Role</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800">Check In</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-800">Image</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-200">
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-800 sm:pl-0">12345</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">Sabina Rasulova</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">Front-end Developer</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500"><span className="date">3/6/2024</span><span className="time">  5:19</span> <span className="PM/AM">PM</span></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">
                                            <button className="text-teal-500 hover:text-red-400">View img</button>
                                        </td>

                                        {/* <td className="flex whitespace-nowrap py-4 px-3 sm:pr-0 gap-2">
                                            <button className="bg-red-300 hover:bg-red-400 text-sm text-white py-1 px-3 rounded-md">Allow</button>
                                            <button className="bg-teal-700 hover:bg-teal-600 text-sm text-white py-1 px-3 rounded-md">Deny</button>
                                        </td> */}
                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-800 sm:pl-0">15675</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">Kenneth Blanton</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">Front-end Developer</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500"><span className="date">3/6/2024</span><span className="time">  5:19</span> <span className="PM/AM">PM</span></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">
                                            <button className="text-teal-500 hover:text-red-500">View img</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-800 sm:pl-0">13466</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">Grace Joh</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">Software Engineer</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500"><span className="date">3/6/2024</span><span className="time">  5:19</span> <span className="PM/AM">PM</span></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500">
                                            <button className="text-teal-500 hover:text-red-400">View img</button>
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


    )
}
