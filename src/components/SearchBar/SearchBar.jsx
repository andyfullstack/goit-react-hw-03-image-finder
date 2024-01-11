import { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './SearchBar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = e => {
    const query = e.target.value;
    this.setState({
      query,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    e.target.reset();
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleFormSubmit}>
          <SearchButton type="submit">
            <SearchButtonLabel />
          </SearchButton>

          <SearchInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
