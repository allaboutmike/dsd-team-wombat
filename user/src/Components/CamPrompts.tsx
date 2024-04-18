import { ReactTyped } from "react-typed";

export default function CamPrompts() {
  return (
    <div className="flex justify-center items-center">
      <ReactTyped
        className="dark:text-gray-200 md:text-5xl sm:text-4xl text-3xl mt-6 font-bold py-8 px-8"
        strings={["Welcome.", "Turn on camera to get started."]}
        typeSpeed={40}
        // backSpeed={40}
        fadeOut={true}
        loop
      />
    </div>
  );
}
