import hotel1Photo from "../assets/hotel-1.jpg";
import hotel2Photo from "../assets/hotel-2.jpg";
import hotel3Photo from "../assets/hotel-3.jpg";

import GalleryItem from "./GalleryItem";

const hotelPhotos = [hotel1Photo, hotel2Photo, hotel3Photo];

const Gallery = () => {
  return (
    <div className='gallery'>
      {hotelPhotos.map((image) => (
        <GalleryItem image={image} />
      ))}
    </div>
  );
};
export default Gallery;
