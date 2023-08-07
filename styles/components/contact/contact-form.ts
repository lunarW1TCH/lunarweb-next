import { keyframes } from '@emotion/react';
import createStyles from '@/styles/create-styles';
import { THEME, mq } from '@/styles/global-styles';

const animation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const styles = createStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '50%',
    padding: 40,
    borderRadius: 8,
    backgroundColor: 'white',
    color: THEME.primary900,
    [mq[1]]: {
      width: '100%',
    },
  },
  formInput: {
    marginBottom: 8,
    padding: 4,
  },
  hasError: {
    borderColor: 'red',
    backgroundColor: '#F8C8DC',
  },
  submitButton: {
    width: 100,
    margin: 'auto',
    marginTop: 8,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: 24,
    color: THEME.primary700,
    '&:hover': {
      color: THEME.primary900,
    },
  },
  errorText: {
    marginTop: 10,
    color: 'red',
    textAlign: 'center',
  },
  spinner: {
    animation: `${animation} 1s infinite linear`,
    margin: 'auto',
  },
});

export default styles;
