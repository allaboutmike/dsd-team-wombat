export default function UpdatedStatusMessage() {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                        <div>
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>

                            {/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div> */}

                            <div className="mt-3 text-center sm:mt-5">
                                <h3 className="text-base font-semibold leading-6 text-zinc-700" id="modal-title">Request is approved</h3>
                            </div>

                            {/* <div className="mt-3 text-center sm:mt-5">
                                <h3 className="text-base font-semibold leading-6 text-zinc-700" id="modal-title">Request is denied</h3>
                            </div> */}
                        </div>
                        <div className="mt-5 sm:mt-6">
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">Go back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



