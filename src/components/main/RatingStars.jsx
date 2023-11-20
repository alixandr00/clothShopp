export const RatingStars = ({ rating, setRating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex">
      {stars.map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-xl ${
            star <= rating ? "text-yellow-400" : "none"
          } `}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};
