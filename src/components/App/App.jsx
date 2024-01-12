import { Component } from 'react';
import Searchbar from '../SearchBar/SearchBar';
import imgFinder from '../../api/imgFinder.js';
import ImgGallery from '../ImgGallery/ImgGallery.jsx';
import Loader from '../Loader/Loader.jsx';
import Button from '../Button/Button.jsx';
import Modal from '../Modal/Modal.jsx';
import StyledApp from './App.styled.jsx';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    showModal: false,
    page: 1,
    loadMore: false,
    selectedImage: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    try {
      this.setState({ isLoading: true });
      const resp = await imgFinder(this.state.query, this.state.page);
      const totalHits = resp.totalHits;
      const hits = resp.hits.map(({ id, webformatURL, largeImageURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      }));
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / 12),
      }));
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = ({ query }) => {
    this.setState({
      query,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleModal = image => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      selectedImage: image,
    }));
  };

  render() {
    const { isLoading, showModal, selectedImage, loadMore } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImgGallery images={this.state.images} handleModal={this.handleModal} />
        {showModal && (
          <Modal imageData={selectedImage} onHideModal={this.handleModal} />
        )}
        {isLoading && <Loader />}
        {loadMore && <Button loadMore={this.handleLoadMore} />}
      </StyledApp>
    );
  }
}

export default App;
