import { Button } from 'antd';

import './create-article.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import { validSchemaArticle } from '../../utils/yupScheme';
import { CreateTags, Tags } from '../create-tags/create-tags';

const CreateArticle = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(validSchemaArticle),
    mode: 'onBlur',
  });

  const [createArticle, setCreateArticle] = useState(props);

  const fetchArticle = props.fetchArticle;

  const addTag = (value) => {
    setCreateArticle((prev) => {
      return {
        ...prev,
        tagList: [...prev.tagList, value],
      };
    });
  };

  const deleteTag = (value) => {
    setCreateArticle((prev) => {
      return {
        ...prev,
        tagList: prev.tagList.filter((tag) => tag !== value),
      };
    });
  };

  const onSubmit = async (data) => {
    try {
      const result = {
        article: {
          title: data.title,
          description: data.shortDescription,
          body: data.text,
          tagList: createArticle.tagList,
        },
      };
      if (props.slug) {
        console.log(result, props.slug);
        await fetchArticle({
          data: result,
          slug: props.slug,
        });
      } else {
        await fetchArticle(result);
      }
    } catch (err) {
      console.error('Failed:', err);
    }
  };

  return (
    <form className={'create-article'} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={'create-article__title'}>Create new article</h2>
      <label className={'create-article__label'}>
        Title:
        <input
          className={`create-article__input ${errors.title ? 'error' : ''}`}
          {...register('title')}
          defaultValue={createArticle.title}
          placeholder={'Title'}
        />
      </label>
      <label className={'create-article__label'}>
        Short description:
        <input
          className={`create-article__input ${errors.shortDescription ? 'error' : ''}`}
          {...register('shortDescription')}
          defaultValue={createArticle.shortDescription}
          placeholder={'Title'}
        />
      </label>
      <div>
        <label className={'create-article__label'}>
          Text:
          <textarea
            className={`create-article__input-text ${errors.text ? 'error' : ''}`}
            {...register('text')}
            defaultValue={createArticle.text}
            placeholder={'Text'}
          />
        </label>
      </div>
      <div className={'create-article__tags'}>
        <label className={'create-article__label'}>
          Tags:
          <div>
            {createArticle.tagList.length !== 0
              ? createArticle.tagList.map((tag) => <Tags key={tag} tag={tag} deleteTag={deleteTag} />)
              : null}
          </div>
          <CreateTags addTag={addTag} />
        </label>
      </div>

      <Button htmlType='submit' className={'create-article__button'} type={'primary'} size={'large'}>
        Send
      </Button>
    </form>
  );
};

export default CreateArticle;
