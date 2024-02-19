const ReviewCard = ({ name, lastName, imgURL, country, city }) => {
  return (
    <div className="snap-center flex justify-center items-center flex-col w-full">
      <img
        style={{ maxWidth: "128px" }}
        className="rounded-full mb-2 w-[128px] object-cover"
        src={imgURL}
        alt="Customer"
      />
      <div className="flex justify-center items-center gap-2">
        <div className="gap-2">
          <div className="flex gap-2 w-max">
            <p className="text-sm font-bold font-montserrat text-slate-grey">
              Country:
            </p>
            <p className="text-sm font-montserrat text-slate-grey">{country}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm font-bold font-montserrat text-slate-grey">
              City:
            </p>
            <p className="text-sm font-montserrat text-slate-grey">{city}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 w-full">
        <p className="text-sm font-bold font-montserrat text-slate-grey">
          Name:
        </p>
        <h3 className="font-palanquin text-md ">{name}</h3>
        <h3 className="font-palanquin text-md ">{lastName}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
