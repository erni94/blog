import { Button } from 'antd';
import './create-tags.css';
import { useState } from 'react';


export const CreateTags = ({ addTag }) => {
  const [tagValue, setTagValue] = useState('');

  const handleAddTag = () => {
    if (tagValue !== '') {
      addTag(tagValue);
      setTagValue('');
    }
  };

  const handleInputChange = (event) => {
    setTagValue(event.target.value);
  };

  return (
    <div className={'create-tags'}>
      <input
        className={'create-tags__input'}
        placeholder={'Tag'}
        value={tagValue}
        onChange={handleInputChange}
      />
      <Button
        type='primary'
        ghost
        danger
        className={'create-tags__button-delete'}
        size={'large'}
      >
        Delete
      </Button>
      <Button
        type='primary'
        ghost
        className={'create-tags__button-add'}
        size={'large'}
        onClick={handleAddTag}
      >
        Add Tag
      </Button>
    </div>
  );
};


export const Tags = ({ tag, deleteTag }) => {
  return (
    <div className={'create-tags'}>
      <input
        className={'create-tags__input'}
        placeholder={'Tag'}
        defaultValue={tag}
      />
      <Button
        type='primary'
        ghost
        danger
        className={'create-tags__button-delete'}
        size={'large'}
        onClick={() => deleteTag(tag)}
      >
        Delete
      </Button>
    </div>
  );
};
