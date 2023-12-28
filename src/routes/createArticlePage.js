import { useNavigate } from 'react-router-dom';

import CreateArticle from '../components/create-article/create-article';
import { useCreateArticleMutation } from '../store/commonAPI';

const CreateArticlePage = () => {
  const [createArticleFetch, { isSuccess, data }] = useCreateArticleMutation();
  const navigate = useNavigate();

  if (isSuccess) {
    navigate(`/articles/${data.article.slug}`);
  }
  return (
    <div className={'app'}>
      <CreateArticle title={''} description={''} body={''} tagList={[]} fetchArticle={createArticleFetch} />
    </div>
  );
};

export default CreateArticlePage;
