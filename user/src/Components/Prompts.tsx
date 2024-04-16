import { ReactTyped } from "react-typed";

export default function Prompts() {
  return (
    <div className="flex justify-center items-center">
      <ReactTyped
        className="md:text-5xl sm:text-4xl text-3xl font-bold py-8 px-8"
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
