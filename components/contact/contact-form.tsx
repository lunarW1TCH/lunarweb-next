'use client';

import { useState } from 'react';
import validator from 'validator';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

import styles from './contact-form-styles';

const ContactForm = () => {
  const classes = styles();

  const [formData, setFormData] = useState({
    email: '',
    title: '',
    message: '',
  });
  const [hasError, setHasError] = useState({
    email: false,
    title: false,
    message: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendingError, setSendingError] = useState(false);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendingError(false);
    console.log(e.currentTarget);

    if (hasError.email || hasError.title || hasError.message) {
      setSendingError(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        '/api/mail',
        {
          ...formData,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);
      setSent(true);
      setIsLoading(false);
    } catch (error) {
      setSendingError(true);
      setIsLoading(false);
    }
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    setSendingError(false);
    setHasError(prevState => ({ ...prevState, [id]: false }));
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const onBlurHandler = (
    e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    let isInvalid = false;

    switch (id) {
      case 'email':
        if (!validator.isEmail(value)) {
          isInvalid = true;
        }
        break;
      case 'title':
        if (validator.isEmpty(value.trim())) {
          isInvalid = true;
        }
        break;
      case 'message':
        if (validator.isEmpty(value.trim())) {
          isInvalid = true;
        }
        break;
    }
    setHasError(prevState => ({ ...prevState, [id]: isInvalid }));
  };

  return (
    <>
      {!sent && (
        <form onSubmit={onSubmitHandler} className={classes.formContainer}>
          <label htmlFor='email'>E-mail</label>
          <input
            className={`
              ${classes.formInput} ${hasError.email && classes.hasError}
            `}
            type='email'
            id='email'
            name='email'
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            value={formData.email}
            required
          />
          <label htmlFor='title'>Title</label>
          <input
            className={`
              ${classes.formInput} ${hasError.title && classes.hasError}
            `}
            type='title'
            id='title'
            name='title'
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            value={formData.title}
            required
          />
          <label htmlFor='message'>Your message</label>
          <textarea
            className={`
              ${classes.formInput} ${hasError.message && classes.hasError}
            `}
            id='message'
            name='message'
            rows={10}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            value={formData.message}
            required
          />
          {isLoading && <FaSpinner className={classes.spinner} />}
          <button className={classes.submitButton} type='submit'>
            Submit!
          </button>
          {sendingError && (
            <span className={classes.errorText}>
              Something went wrong, please try again later!
            </span>
          )}
        </form>
      )}
      {sent && (
        <h1 className={classes.thankYouText}>
          Thank you! I&apos;ll get in touch with you shortly.
        </h1>
      )}
    </>
  );
};

export default ContactForm;
