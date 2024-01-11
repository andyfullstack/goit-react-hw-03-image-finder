import { Component } from 'react';
import { ImgGalleryLi, ImgGalleryLiImage } from './ImgGalleryItem.styled';

class ImgGalleryItem extends Component {
  showModal = () => {
    this.props.onShowModal();
  };
  render() {
    const { id, webformatURL } = this.props.imageData;
    return (
      <ImgGalleryLi key={id}>
        <ImgGalleryLiImage
          src={webformatURL}
          alt="imageStock"
          onClick={this.showModal}
        />
      </ImgGalleryLi>
    );
  }
}

export default ImgGalleryItem;
