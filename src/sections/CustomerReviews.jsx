import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const CustomerReviews = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const url = "https://randomuser.me/api/";

  const getUser = async () => {
    try {
      const response = await axios.get(url);
      const newData = response.data.results;
      const slicedData = newData.slice(0, 10);
      setUsers((prevUsers) => [...prevUsers, ...slicedData]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (users.length <= 10) {
      getUser();
    }

    console.log(users);
  }, [users]);

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 200;
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 200;
  };

  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button className="max-lg:hidden">
          <FaArrowLeft
            className="active:shadow-lg"
            size={30}
            onClick={handleScrollLeft}
          />
        </button>

        <div
          style={{ scrollbarWidth: "none" }}
          className="snap-mandatory snap-x mt-24 flex flex-1 items-center max-lg:flex-col gap-14 overflow-x-scroll"
          ref={containerRef}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            users.map((user, i) => (
              <ReviewCard
                key={i}
                name={user.name.first}
                imgURL={user.picture.large}
                country={user.location.country}
                city={user.location.city}
                lastName={user.name.last}
              />
            ))
          )}
        </div>
        <button className="max-lg:hidden">
          <FaArrowRight size={30} onClick={handleScrollRight} />
        </button>
      </div>
    </section>
  );
};

export default CustomerReviews;
