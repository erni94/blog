import CreateArticle from '../components/create-article/create-article';
import { useCreateArticleMutation } from '../store/commonAPI';

const CreateArticlePage = () => {
  const [createArticleFetch, { data, error, isLoading }] = useCreateArticleMutation();

  return (
    <div className={'app'}>
      <CreateArticle title={''} description={''} body={''} tagList={[]} fetchArticle={createArticleFetch} />
    </div>
  );
};

export default CreateArticlePage;
