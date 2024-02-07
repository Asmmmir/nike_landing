import Button from "../components/Button";
import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          {" "}
          We Provide You{" "}
          <span className="text-coral-red inline-block mt-3"> Super </span>{" "}
          <span className="text-coral-red inline-block mt-3"> Quality </span>{" "}
          Shoes
          <br />
        </h1>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comvfort and style, out meticulously cragted footwear
          is designed to elevate your experience, providing you with unmarched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text lg:max-w-lg mt-4">
          Our dedication to detail and excellence ensures yyour satisfation
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt='shoe8' width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
