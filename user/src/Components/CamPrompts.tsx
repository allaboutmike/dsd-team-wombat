import { ReactTyped } from "react-typed";

const CamPrompts = () => {
  return (
    <div className="flex justify-center items-center">
      <ReactTyped
        className="md:text-5xl sm:text-4xl text-3xl font-bold py-8 px-8"
        strings={["Welcome.", "Turn on camera to get started."]}
        typeSpeed={40}
        // backSpeed={40}
        fadeOut={true}
        loop
      />
    </div>
  );
};

export default CamPrompts;
