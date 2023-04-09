interface GalleryItemProps {
  image: string;
}

const GalleryItem = ({ image }: GalleryItemProps) => {
  return (
    <figure className='gallery__item'>
      <img src={image} alt='Photo hotel 1' className='gallery__photo' />
    </figure>
  );
};
export default GalleryItem;
