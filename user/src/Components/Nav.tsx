import fase from "../assets/images/FASE.png";

const Nav = () => {
  return (
    <>
      <header className="bg-white shadow-sm">
        <img
          src={fase}
          height={150}
          width={150}
          className="ml-6 rounded-[50px]"
        />
      </header>
    </>
  );
};

export default Nav;

// <div className="max-w-7xl px-4 py-4 sm:px-6 lg:px-8">

//   <h1 className="text-lg font-semibold leading-6 text-zinc-700 flex justify-start">
//     Image Verification
//   </h1>
// </div>
