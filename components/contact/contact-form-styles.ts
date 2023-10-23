import { sva } from '@shadow-panda/styled-system/css';

const styles = sva({
  slots: [
    'formContainer',
    'formInput',
    'hasError',
    'submitButton',
    'errorText',
    'spinner',
    'thankYouText',
  ],
  base: {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingTop: 'xxl',
      color: 'primary.700',
    },
    formInput: {
      marginBottom: 's',
      padding: 'xs',
      border: 'accent',
    },
    hasError: {
      border: 'destructive',
    },
    thankYouText: {
      padding: 'xxl',
      fontSize: 'l',
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'primary.700',
    },
    spinner: {
      animation: `spin 1s infinite linear`,
      margin: 'auto',
    },
  },
});

export default styles;
