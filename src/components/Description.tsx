import userPhoto3 from "../assets/user-3.jpg";
import userPhoto4 from "../assets/user-4.jpg";
import userPhoto5 from "../assets/user-5.jpg";
import userPhoto6 from "../assets/user-6.jpg";

const Description = () => {
  return (
    <div className='description'>
      <p className='paragraph'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam labore
        velit obcaecati ullam blanditiis officia eveniet, odit harum tenetur
        voluptates dicta provident doloremque et magni id facere, reprehenderit,
        quasi omnis!
      </p>
      <p className='paragraph'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eaque,
        natus quisquam earum quae architecto vel similique obcaecati! Enim,
        dolor magni minima numquam aspernatur debitis! Mollitia sequi soluta cum
        quaerat!
      </p>
      <ul className='list'>
        <li className='list__item'>Close to the beach</li>
        <li className='list__item'>Breakfast included</li>
        <li className='list__item'>Free airport shuffle</li>
        <li className='list__item'>Free wifi in all rooms</li>
        <li className='list__item'>Air conditioning and heating</li>
        <li className='list__item'>Pets allowed</li>
        <li className='list__item'>We speak all languages</li>
        <li className='list__item'>Perfect for families</li>
      </ul>
      <div className='recommend'>
        <p className='recommend__count'>
          Lucy and 3 other friends recommend this hotel.
        </p>
        <div className='recommend__friends'>
          <img
            src={userPhoto3}
            alt='User Photo 3'
            className='recommend__photo'
          />
          <img
            src={userPhoto4}
            alt='User Photo 4'
            className='recommend__photo'
          />
          <img
            src={userPhoto5}
            alt='User Photo 5'
            className='recommend__photo'
          />
          <img
            src={userPhoto6}
            alt='User Photo 6'
            className='recommend__photo'
          />
        </div>
      </div>
    </div>
  );
};
export default Description;
