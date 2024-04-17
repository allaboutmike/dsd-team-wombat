import logo_light from "../assets/images/WOMLIGHT_LOGO.png";
import logo_light_name from "../assets/images/WOMLIGHT_NAME.png";
import logo_dark from "../assets/images/WOMBLU_LOGO.png";
import logo_dark_name from "../assets/images/WOMBLU_NAME.png";

export default function Nav() {
  return (
    <>
      <header className="transition duration-400 dark:bg-[#18214A] dark:text-gray-100 dark:shadow-blue-950 dark:shadow-lg bg-white shadow-lg flex">
        <img
          src={logo_dark}
          height={150}
          width={150}
          className="ml-1/10 rounded-[60px]"
        />
        <img
          src={logo_dark_name}
          height={150}
          width={350}
          className="mx-auto"
        />
      </header>
    </>
  );
}
