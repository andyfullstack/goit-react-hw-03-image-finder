import api from './api';

const API_KEY = '40336081-5219cc859e2994812c4617836';

const imgFinder = async (searchQuery, page) => {
  const { data } = await api(
    `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

export default imgFinder;
