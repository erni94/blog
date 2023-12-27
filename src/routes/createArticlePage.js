import CreateArticle from '../components/create-article/create-article';

const CreateArticlePage = () => {
  return (
    <div className={'app'}>
      <CreateArticle title={''} description={''} body={''} tagList={[]} />
    </div>
  );
};

export default CreateArticlePage;
