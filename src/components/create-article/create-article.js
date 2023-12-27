import { Button } from 'antd';


import './create-article.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { validSchemaArticle } from '../../utils/yupScheme';
import { useState } from 'react';
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
        tagList: prev.tagList.filter(tag => tag !== value),
      };
    });
  };


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.error('Registration failed:', err);
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
          value={createArticle.title}
          placeholder={'Title'}
        />
      </label>
      <label className={'create-article__label'}>
        Short description:
        <input
          className={`create-article__input ${errors.shortDescription ? 'error' : ''}`}
          {...register('shortDescription')}
          value={createArticle.shortDescription}
          placeholder={'Title'}
        />
      </label>
      <div>
        <label className={'create-article__label'}>
          Text:
          <textarea
            className={`create-article__input-text ${errors.text ? 'error' : ''}`}
            {...register('text')}
            value={createArticle.text}
            placeholder={'Text'}
          />
        </label>
      </div>
      <div className={'create-article__tags'}>
        <label className={'create-article__label'}>
          Tags:
          <div>
            {createArticle.tagList.length !== 0 ? (
              createArticle.tagList.map((tag) => (
                <Tags key={tag} tag={tag} deleteTag={deleteTag} />
              ))
            ) : null}
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
