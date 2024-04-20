import AuditTrail from "./audit_trail";
import DailyVisits from "./daily_visits";
import IncomingRequests from "./incoming_requests";
import Statistics from "./statistics";
import { IncomingRequest, User } from "@/app/models/models";

type DashboardProps = {
  toggleAddUserModal: () => void;
  activeTab: string;
  handleTabClick: (tabName: string) => void;
  requests: IncomingRequest[];
  users: User[];
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  currentRequests: IncomingRequest[];
  totalPages: number;
  onOpenViewImageModal: (requestId: string) => void;
  selectedRequest: IncomingRequest | null;
  incomingRequests: IncomingRequest[]
};

export default function Dashboard({ toggleAddUserModal, onOpenViewImageModal, activeTab, handleTabClick, selectedRequest, users, currentPage,
  nextPage, prevPage, currentRequests, totalPages, incomingRequests }: DashboardProps) {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold leading-6 text-zinc-700">
            Dashboard
          </h1>
        </div>
      </header>

      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4  sm:flex-none flex justify-end">
        <button
          type="button"
          className="block rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          onClick={toggleAddUserModal}
        >
          Add user
        </button>
      </div>

      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <IncomingRequests
              currentRequests={currentRequests}
              totalPages={totalPages}
              onOpenViewImageModal={onOpenViewImageModal}
              currentPage={currentPage}
              nextPage={nextPage}
              prevPage={prevPage} />
          </div>
          <Statistics incomingRequests={incomingRequests} />
        </div>

        <h2 className="text-lg font-semibold leading-6 text-zinc-800 mt-10 mb-4">
          Reports
        </h2>

        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* <!-- Use an "onChange" listener to redirect the user to the selected tab URL. --> */}
          <select id="tabs" name="tabs" className="block w-full rounded-md border-zinc-300 py-2 pl-3 pr-10 text-base focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm" value={activeTab} onChange={(e) => handleTabClick(e.target.value)}>
            <option defaultValue="" value="Daily Visits">Daily Visits</option>
            <option value="User Audit Trail">User Audit Trail</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <a
                href="#"
                className={`whitespace-nowrap py-4 px-1 text-sm font-medium ${activeTab === "Daily Visits"
                  ? "border-b-2 border-teal-500 text-teal-600"
                  : "border-transparent text-zinc-500"
                  }`}
                onClick={() => handleTabClick("Daily Visits")}
              >
                Daily Visits
              </a>
              <a
                href="#"
                className={` whitespace-nowrap py-4 px-1 text-sm font-medium ${activeTab === "User Audit Trail"
                  ? "border-b-2 border-teal-500 text-teal-600"
                  : "border-transparent text-zinc-500"
                  }`}
                onClick={() => handleTabClick("User Audit Trail")}
              >
                User Audit Trail
              </a>
            </nav>
          </div>
        </div>
        {activeTab === 'Daily Visits' && <DailyVisits onOpenViewImageModal={onOpenViewImageModal} users={users} selectedRequest={selectedRequest} />}
        {activeTab === 'User Audit Trail' && <AuditTrail onOpenViewImageModal={onOpenViewImageModal} selectedRequest={selectedRequest} />}
      </div>
    </div>
  )
}
