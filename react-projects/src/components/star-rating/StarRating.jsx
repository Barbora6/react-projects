import { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  const handleRefresh = () => {
    setRating(0);
    setHover(0);
  };

  return (
    <div className="star-rating">
      <h2>How many stars give me today?</h2>
      {[...Array(noOfStars)].map((__, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}

      <button onClick={handleRefresh}>Obnov</button>
    </div>
  );
};
