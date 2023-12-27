import { useParams } from 'react-router-dom';

import CreateArticle from '../components/create-article/create-article';
import { useEditArticleMutation, useGetArticleQuery } from '../store/commonAPI';

const EditArticlePage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGetArticleQuery(slug);
  const [editArticleFetch, { err, isLoad }] = useEditArticleMutation();

  if (!isLoading) {
    return (
      <div className={'app'}>
        <CreateArticle
          title={data.article.title}
          shortDescription={data.article.description}
          text={data.article.body}
          tagList={data.article.tagList}
          fetchArticle={editArticleFetch}
          slug={slug}
        />
      </div>
    );
  }

};

export default EditArticlePage;
