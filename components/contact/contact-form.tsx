'use client';

import axios from 'axios';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import validator from 'validator';

import { useTranslation } from '@/app/i18n/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Props from '@/interfaces/props';
import { VStack } from '@shadow-panda/styled-system/jsx';

import { Button } from '../ui/button';
import { Label } from '../ui/label';
import styles from './contact-form-styles';

const ContactForm = (props: Props) => {
  const classes = styles();
  const { lng } = props;
  const { t } = useTranslation(lng, 'contact');

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
    <Card width='50%' mDown={{ width: '100%' }}>
      <CardContent width='100%'>
        {!sent && (
          <form onSubmit={onSubmitHandler} className={classes.formContainer}>
            <Label display='none' htmlFor='email'>
              E-mail
            </Label>
            <Input
              className={`
              ${hasError.email && classes.hasError}
            `}
              type='email'
              id='email'
              name='email'
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              value={formData.email}
              required
              placeholder='E-mail'
              marginY='s'
            />
            <Label display='none' htmlFor='title'>
              {t('title')}
            </Label>
            <Input
              className={`
              ${hasError.title && classes.hasError}
            `}
              type='title'
              id='title'
              name='title'
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              value={formData.title}
              required
              placeholder={t('title')}
              marginY='s'
            />
            <Label display='none' htmlFor='message'>
              {t('message')}
            </Label>
            <Textarea
              className={`
              ${hasError.message && classes.hasError}
            `}
              id='message'
              name='message'
              rows={10}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              value={formData.message}
              required
              marginY='s'
              placeholder={t('message')}
            />

            <Button fontSize='m' variant='ghost' type='submit'>
              {isLoading && (
                <VStack>
                  <FaSpinner className={classes.spinner} />
                </VStack>
              )}
              {t('submit')}
            </Button>
            {sendingError && (
              <span className={classes.errorText}>{t('error')}</span>
            )}
          </form>
        )}
        {sent && <h1 className={classes.thankYouText}>{t('thank-you')}</h1>}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
