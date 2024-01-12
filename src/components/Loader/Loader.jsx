import { Watch } from 'react-loader-spinner';

// import PageLoader from './Loader.styled';

const Loader = () => {
  return (
    // <PageLoader>
    <Watch
      visible={true}
      height="80"
      width="80"
      radius="48"
      color="#3c2bd6"
      ariaLabel="watch-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
      wrapperClass=""
    />
    // </PageLoader>
  );
};
export default Loader;
