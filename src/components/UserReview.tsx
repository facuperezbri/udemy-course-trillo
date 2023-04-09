export interface UserReviewProps {
  date: string;
  name: string;
  rating: string;
  reviewText: string;
  userPhoto: string;
}

const UserReview = ({
  reviewText,
  userPhoto,
  name,
  date,
  rating,
}: UserReviewProps) => {
  return (
    <figure className='review'>
      <blockquote className='review__text'>{reviewText}</blockquote>
      <figcaption className='review__user'>
        <img src={userPhoto} alt='User Photo' className='review__photo' />
        <div className='review__user-box'>
          <p className='review__user-name'>{name}</p>
          <p className='review__user-date'>{date}</p>
        </div>
        <div className='review__rating'>{rating}</div>
      </figcaption>
    </figure>
  );
};
export default UserReview;
