const Button = ({ label, iconURL, learnMore, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        learnMore ? "bg-white" : "bg-coral-red"
      } rounded-full ${fullWidth && 'w-full'} ${learnMore ? "text-info" : "text-white"} border-coral`}
    >
      {label}

      {iconURL && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
          alt="arrow rigght icon"
        />
      )}
    </button>
  );
};

export default Button;
