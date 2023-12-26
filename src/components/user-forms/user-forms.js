import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Checkbox } from 'antd';

import './user-forms.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { validSchemaEdit, validSchemaLog, validSchemaReg } from '../../utils/yupScheme';
import { useLoginUserMutation, useRegisterUserMutation, useUpdateUserMutation } from '../../store/commonAPI';
import { setIsLoggedIn, setUser } from '../../store/reducers';


const ErrorMessage = ({ message }) => {
  return <span className={'user-form__error'}>{message}</span>;
};

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(validSchemaReg),
    mode: 'onBlur',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();

  const onSubmit = async (data) => {
    try {
      const { user } = await registerUser(data).unwrap();
      dispatch(setIsLoggedIn(true));
      console.log(user);
      dispatch(setUser(user));
      navigate('/articles');
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <div className={'user-form'}>
      <h2 className={'user-form__title'}>Create new account</h2>
      <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
        <label className='input-label'>
          Username
          <input
            className={`user-form__input ${errors.username ? 'error' : ''}`}
            {...register('username')}
            placeholder='Enter your username'
          />
          {errors.username && <ErrorMessage message={errors.username.message} />}
        </label>
        <label className='input-label'>
          Email address
          <input
            className={`user-form__input ${errors.email ? 'error' : ''}`}
            {...register('email')}
            placeholder='Enter your email address'
          />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </label>
        <label className='input-label'>
          Password
          <input
            className={`user-form__input ${errors.password ? 'error' : ''}`}
            type='password'
            {...register('password')}
            placeholder='Enter your password'
          />
          {errors.password && <ErrorMessage message={errors.password.message} />}
        </label>
        <label className='input-label'>
          Repeat Password
          <input
            className={`user-form__input ${errors.repeatPassword ? 'error' : ''}`}
            type='password'
            {...register('repeatPassword')}
            placeholder='Repeat your password'
          />
          {errors.repeatPassword && <ErrorMessage message={errors.repeatPassword.message} />}
        </label>
        <Checkbox onChange={(e) => setValue('agree', e.target.checked)}>
          I agree to the processing of my personal information
        </Checkbox>
        {errors.agree && <ErrorMessage message={errors.agree.message} />}
        <Button type='primary' htmlType='submit' style={{ width: '319px', height: '40px', marginTop: '20px' }}>
          Submit
        </Button>
      </form>

      <div className={'user-form__description'}>
        <p>Already have an account? </p>{' '}
        <Link className={'user-form__link'} to={'/sign-in'}>
          Sign In.
        </Link>
      </div>
    </div>
  );
};

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validSchemaLog),
    mode: 'onBlur',
  });

  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { user } = await loginUser(data).unwrap();
    dispatch(setIsLoggedIn(true));
    dispatch(setUser(user));
    navigate('/articles');
  };

  return (
    <div className={'user-form'}>
      <h2 className={'user-form__title'}>Sign In</h2>
      <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
        <label className='input-label'>
          Email address
          <input
            className={`user-form__input ${errors.email ? 'error' : ''}`}
            {...register('email')}
            placeholder='Enter your email address'
          />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </label>
        <label className='input-label'>
          Password
          <input
            className={`user-form__input ${errors.password ? 'error' : ''}`}
            type='password'
            {...register('password')}
            placeholder='Enter your password'
          />
          {errors.password && <ErrorMessage message={errors.password.message} />}
        </label>
        <Button type='primary' htmlType='submit' style={{ width: '319px', height: '40px', marginTop: '20px' }}>
          Login
        </Button>
      </form>
      <div className={'user-form__description'}>
        <p>Don’t have an account?</p>{' '}
        <Link className={'user-form__link'} to={'/sign-up'}>
          Sign Up.
        </Link>
      </div>
    </div>
  );
};

export const EditProfileForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validSchemaEdit),
    mode: 'onBlur',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateUser, { isLoading, isError }] = useUpdateUserMutation();
  const usernameSate = useSelector((state) => state.rootReducer.user.username);
  const emailState = useSelector((state) => state.rootReducer.user.email);

  const onSubmit = async (data) => {
    const { user } = await updateUser(data).unwrap();
    dispatch(setUser(user));
    navigate('/profile');
  };

  return (
    <div className={'user-form'}>
      <h2 className={'user-form__title'}>Edit Profile</h2>
      <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
        <label className='input-label'>
          Username
          <input
            className={`user-form__input ${errors.username ? 'error' : ''}`}
            {...register('username')}
            value={usernameSate}
          />
          {errors.username && <ErrorMessage message={errors.username.message} />}
        </label>
        <label className='input-label'>
          Email address
          <input
            className={`user-form__input ${errors.email ? 'error' : ''}`}
            {...register('email')}
            value={emailState}
          />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </label>
        <label className='input-label'>
          Repeat Password
          <input
            className={`user-form__input ${errors.newPassword ? 'error' : ''}`}
            type='password'
            {...register('newPassword')}
            placeholder='Repeat your password'
          />
          {errors.newPassword && <ErrorMessage message={errors.newPassword.message} />}
        </label>
        <label className='input-label'>
          Avatar image (url)
          <input
            className={`user-form__input ${errors.imgUrl ? 'error' : ''}`}
            {...register('imgUrl')}
            placeholder='Avatar image'
          />
          {errors.imgUrl && <ErrorMessage message={errors.imgUrl.message} />}
        </label>
        <Button type='primary' htmlType='submit' style={{ width: '319px', height: '40px', marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};
