export default function Users() {

  const users = [
    { id: 1, name: 'Lindsay Walton', role: 'Front End Developer', dateCreated: '2021-08-25' },
    { id: 2, name: 'Stephanie Curry', role: 'Back End Developer', dateCreated: '2021-10-17' },
    { id: 3, name: 'John Doe', role: 'UI/UX Designer', dateCreated: '2021-11-11' }
  ];
  
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold leading-6 text-zinc-700">
            Users
          </h1>
        </div>
      </header>
      <div className="lg:px-8 sm:px-6  w-full max-w-7xl mx-auto">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date Created
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Image
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {users.map((user) => (
                    <tr key={user.id}>
                     <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      {user.id}
                     </td>
                     <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                     <div className="font-medium text-gray-900">
                     {user.name} 
                     </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    {user.role}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    {user.dateCreated}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <button
                    type="button"
                    className="text-white hover:bg-teal-500 bg-teal-600 px-2 py-1 text-xs font-medium rounded-md"
                    >
                    View
                    </button>
                    </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
