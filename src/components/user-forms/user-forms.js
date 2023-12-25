import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Checkbox } from 'antd';
import './user-forms.css';

export const RegisterForm = () => {

  const { register, formState: { errors }, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);// Сброс данных формы после успешной отправки
  };

  return (
    <div className={'user-form'}>
      <h2 className={'user-form__title'}>Create new account</h2>
      <form className={'form'} onSubmit={handleSubmit(onSubmit)}>

        <div className='input-wrapper'>
          <span className='input-label'>Username</span>
          <input className={'user-form__input'} {...register('username', { required: true })} />
        </div>
        <div className='input-wrapper'>
          <span className='input-label'>Email address</span>
          <input className={'user-form__input'} {...register('email', { required: true })} />
        </div>
        <div className='input-wrapper'>
          <span className='input-label'>Password</span>
          <input className={'user-form__input'} type='password' {...register('password', { required: true })} />
        </div>
        <div className='input-wrapper'>
          <span className='input-label'>Repeat Password</span>
          <input className={'user-form__input'} type='password' {...register('confirmPassword', { required: true })} />
        </div>
        <Checkbox onChange={(e) => setValue('agree', e.target.checked)}>
          I agree to the processing of my personal information
        </Checkbox>
        {errors.agree && <span>This field is required</span>}
        <Button type='primary'
                htmlType='submit'
                style={{ width: '319px', height: '40px', marginTop: '20px' }}>
          Submit
        </Button>
        {/*<button className={'user-form__button'} type='submit'>Submit</button>*/}
      </form>
      <div className={'user-form__description'}>
        <p>Already have an account? </p> <a className={'user-form__link'} href='#'>Sign In.</a>
      </div>
    </div>
  );
};
