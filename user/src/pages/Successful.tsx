import doge from "../assets/images/doge.png";

export default function Successful() {
  return (
    <>
      <div className="mx-auto flex-col items-center">
        <img
          className="mx-auto h-1/3 w-1/3 mt-6 rounded-[50px] shadow-slate-700 shadow-lg dark:shadow-slate-900 dark:shadow-2xl"
          src={doge}
          alt="Doge Meme Sunglasses"
        />
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:flex-none flex justify-center">
          <h1 className="block w-[40rem] rounded-[30px] bg-green-400 px-10 py-10 text-center text-3xl font-semibold text-green-900 shadow-slate-700 shadow-lg dark:shadow-slate-900 dark:shadow-2xl">
            SUCCESS
          </h1>
        </div>
      </div>
    </>
  );
}
