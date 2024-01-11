import { Component } from 'react';
import { Overlay, ModalDiv, ModalImg } from './Modal.styled.jsx';

class Modal extends Component {
  handleEsc = e => {
    if (e.code === 'Escape') this.props.onHideModal();
    console.log('esc');
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  }
  render() {
    const { largeImageURL } = this.props.imageData;
    return (
      <Overlay onClick={this.props.onHideModal}>
        <ModalDiv>
          <ModalImg src={largeImageURL} alt="largeImage" />
        </ModalDiv>
      </Overlay>
    );
  }
}

export default Modal;
