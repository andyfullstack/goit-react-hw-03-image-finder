import ImgGalleryItem from 'components/ImgGalleryItem/ImgGalleryItem';
import ImgGalleryList from './ImgGallery.styled';

const ImgGallery = ({ images, handleModal }) => {
  return (
    <ImgGalleryList>
      {images &&
        images.map((image, index) => (
          <ImgGalleryItem
            key={index}
            imageData={image}
            onShowModal={() => handleModal(image)}
          />
        ))}
    </ImgGalleryList>
  );
};

export default ImgGallery;
