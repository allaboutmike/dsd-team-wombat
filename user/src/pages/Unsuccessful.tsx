import VerifyModal from "../Components/Modal";
import { openModal } from "../Components/Modal";

const Unsuccessful = () => {
  return (
    <>
    <div>
      <button
        onClick={() => openModal("verify_modal")}
        className="rounded-md bg-teal-600 px-3 py-2 my-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
      >
        Request Admin Verification
      </button>
    </div>
      
      <VerifyModal id="verify_modal">
        <h1 className="text-2xl font-semibold mb-7 text-white">
          Enter your information
        </h1>
        <form className="w-[450px]">
          <div className="mb-5">
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white mb-5 focus:outline-none"
              type="text"
              placeholder="Enter BadgeID"
            />
          </div>
        
          <button className="w-full block rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
            Request Admin Override
          </button>
        </form>
      </VerifyModal> 
    </>
  );
};
export default Unsuccessful;

