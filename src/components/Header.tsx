import logo from "../assets/logo.png";
import userPhoto from "../assets/user.jpg";
import spriteSVG from "../assets/sprite.svg";

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='Trillo Logo' className='logo' />

      <form className='search'>
        <input
          type='text'
          className='search__input'
          placeholder='Search hotels'
        />
        <button className='search__button'>
          <svg className='search__icon'>
            <use xlinkHref={`${spriteSVG}#icon-magnifying-glass`} />
          </svg>
        </button>
      </form>

      <nav className='user-nav'>
        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use xlinkHref={`${spriteSVG}#icon-bookmark`} />
          </svg>
          <span className='user-nav__notification'>7</span>
        </div>

        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use xlinkHref={`${spriteSVG}#icon-chat`} />
          </svg>
          <span className='user-nav__notification'>30</span>
        </div>

        <div className='user-nav__user'>
          <img
            src={userPhoto}
            alt='User photo'
            className='user-nav__user-photo'
          />
          <span className='user-nav__user-name'>Jonas</span>
        </div>
      </nav>
    </div>
  );
};
export default Header;
