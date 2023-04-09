import spriteSVG from "../assets/sprite.svg";

const Overview = () => {
  return (
    <div className='overview'>
      <h2 className='overview__heading'>Hotel Las Palmas</h2>
      <div className='overview__stars'>
        <svg className='overview__icon-star'>
          <use xlinkHref={`${spriteSVG}#icon-star`} />
        </svg>
        <svg className='overview__icon-star'>
          <use xlinkHref={`${spriteSVG}#icon-star`} />
        </svg>
        <svg className='overview__icon-star'>
          <use xlinkHref={`${spriteSVG}#icon-star`} />
        </svg>
        <svg className='overview__icon-star'>
          <use xlinkHref={`${spriteSVG}#icon-star`} />
        </svg>
        <svg className='overview__icon-star'>
          <use xlinkHref={`${spriteSVG}#icon-star`} />
        </svg>
      </div>
      <div className='overview__location'>
        <svg className='overview__icon-location'>
          <use xlinkHref={`${spriteSVG}#icon-location-pin`} />
        </svg>
        <button className='btn-inline'>Albufeira, Portugal</button>
      </div>
      <div className='overview__rating'>
        <div className='overview__rating-average'>8.6</div>
        <div className='overview__rating-count'>429 votes</div>
      </div>
    </div>
  );
};
export default Overview;
