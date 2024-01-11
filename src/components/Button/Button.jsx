import ButtonLoadMore from './Button.styled';

const Btn = props => {
  return (
    <ButtonLoadMore type="button" onClick={props.loadMore}>
      Load More
    </ButtonLoadMore>
  );
};

export default Btn;
