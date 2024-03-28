export default function Statistics() {
    return (
        <div>

            <h2 className="text-lg font-semibold leading-6 text-zinc-700 mb-8">Statistics</h2>

            <div className="border rounded-md p-4">
                <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
                    <div className="overflow-hidden rounded-lg bg-white shadow-md p-3">
                        <dt className="truncate text-sm font-medium text-zinc-500">Total Visitors</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">128</dd>
                    </div>

                    <div className="overflow-hidden rounded-lg bg-white shadow-md  p-3">
                        <dt className="truncate text-sm font-medium text-zinc-500">Default Accesses</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">110</dd>
                    </div>

                    <div className="overflow-hidden rounded-lg bg-white shadow-md  p-3">
                        <dt className="truncate text-sm font-medium text-zinc-500">Admin Accesses</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">18</dd>
                    </div>

                    <div className="overflow-hidden rounded-lg bg-white shadow-md  p-3">
                        <dt className="truncate text-sm font-medium text-zinc-500">Present Users</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">58</dd>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white shadow-md  p-3">
                        <dt className="truncate text-sm font-medium text-zinc-500">Absent Users</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">70</dd>
                    </div>

                    <div className="overflow-hidden rounded-lg bg-white shadow-md  p-3">
                        <dt className="truncate text-sm font-medium text-zinc-500">Denied Accesses</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">4</dd>
                    </div>
                </dl>
            </div>
        </div>


    )
}