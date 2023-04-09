import UserReview from "./UserReview";

import userPhoto1 from "../assets/user-1.jpg";
import userPhoto2 from "../assets/user-2.jpg";

const data = [
  {
    reviewText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nemo beatae eum ipsam modi!",
    name: "Nick Smith",
    date: "Feb 23rd, 2020",
    rating: "7.8",
    userPhoto: userPhoto1,
  },
  {
    reviewText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nemo beatae eum ipsam modi!",
    name: "Mary Thomas",
    date: "Sep 13th, 2022",
    rating: "9.3",
    userPhoto: userPhoto2,
  },
];

const UserReviews = () => {
  return (
    <div className='reviews'>
      {data.map((user) => (
        <UserReview {...user} />
      ))}
      <button className='btn-inline'>
        Show all <span>&rarr;</span>
      </button>
    </div>
  );
};
export default UserReviews;
