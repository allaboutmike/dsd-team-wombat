import { IncomingRequest, User } from "@/app/models/models";

type StatisticsProps = {
  incomingRequests: IncomingRequest[]
}

export default function Statistics({ incomingRequests }: StatisticsProps) {

  const totalRequests = incomingRequests.length;

  const automatedRequests = incomingRequests.filter(
    (request) => request.state === "AUTOMATED"
  ).length;

  const adminAccessRequiredRequests = incomingRequests.filter(
    (request) => request.state === "MANUAL_OVERRIDE_ACTIONED"
  ).length;

  const adminDeniedRequests = incomingRequests.filter(
    (request) => request.approvalStatus === "DENIED"
  ).length;

  return (
    <div>
      <h2 className="text-lg font-semibold leading-6 text-zinc-700 mb-8">
        Statistics
      </h2>

      <div className="border rounded-md p-4">
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
          <div className="overflow-hidden rounded-lg bg-white shadow-md p-3">
            <dt className="truncate text-sm font-medium text-zinc-500">
              Total Visitors
            </dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">
              {totalRequests}
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow-md  p-3">
            <dt className="truncate text-sm font-medium text-zinc-500">
              Default Accesses
            </dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">
              {automatedRequests}
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow-md  p-3">
            <dt className="truncate text-sm font-medium text-zinc-500">
              Admin Accesses
            </dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">
              {adminAccessRequiredRequests}
            </dd>
          </div>

          {/* <div className="overflow-hidden rounded-lg bg-white shadow-md  p-3">
            <dt className="truncate text-sm font-medium text-zinc-500">
              Present Users
            </dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">
              58
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-md  p-3">
            <dt className="truncate text-sm font-medium text-zinc-500">
              Absent Users
            </dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">
              70
            </dd>
          </div> */}

          <div className="overflow-hidden rounded-lg bg-white shadow-md  p-3">
            <dt className="truncate text-sm font-medium text-zinc-500">
              Denied Accesses
            </dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight text-red-400">
              {adminDeniedRequests}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
