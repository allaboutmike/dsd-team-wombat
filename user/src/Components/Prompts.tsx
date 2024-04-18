import { ReactTyped } from "react-typed";

export default function Prompts() {
  return (
    <div className="flex justify-center items-center dark:text-gray-300">
      <ReactTyped
        className="dark:text-gray-200 md:text-5xl sm:text-4xl mt-6 text-3xl font-bold py-8 px-8"
        strings={[
          "Center yourself.",
          "Capture or Retake.",
          "Submit to verify.",
        ]}
        typeSpeed={40}
        // backSpeed={40}
        fadeOut={true}
        loop
      />
    </div>
  );
}
