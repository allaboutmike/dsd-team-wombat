import logo from "../assets/images/WB_LOGO.png";

export default function Nav() {
  return (
    <>
      <header className="transition duration-400 dark:bg-slate-800 dark:text-gray-100 dark:shadow-slate-900 dark:shadow-lg bg-white shadow-lg flex">
        <img src={logo} height={150} width={150} className="ml-1/10" />
      </header>
    </>
  );
}
