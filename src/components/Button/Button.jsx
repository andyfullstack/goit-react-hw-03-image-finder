import BtnMoreLoading from './Button.styled';

const Btn = props => {
  return (
    <BtnMoreLoading type="button" onClick={props.loadMore}>
      Load More
    </BtnMoreLoading>
  );
};

export default Btn;
