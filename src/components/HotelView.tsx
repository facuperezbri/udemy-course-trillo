import Description from "./Description";
import UserReviews from "./UserReviews";
import Overview from "./Overview";
import Gallery from "./Gallery";
import CTA from "./CTA";

const HotelView = () => {
  return (
    <main className='hotel-view'>
      <Gallery />
      <Overview />
      <div className='detail'>
        <Description />
        <UserReviews />
      </div>
      <CTA />
    </main>
  );
};
export default HotelView;
