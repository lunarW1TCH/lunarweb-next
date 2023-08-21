import { sva } from '@/styled-system/css';

const styles = sva({
  slots: [
    'formContainer',
    'formInput',
    'hasError',
    'submitButton',
    'errorText',
    'spinner',
    'thankYouText'
  ],
  base: {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '50%',
      padding: 'xxl',
      borderRadius: 's',
      backgroundColor: 'white',
      color: 'primary.900',
      boxShadow: 'solid',
      mDown: {
        width: '100%',
      },
    },
    formInput: {
      marginBottom: 's',
      padding: 'xs',
      border: 'accent',
    },
    hasError: {
      border: 'accentError !important',
      backgroundColor: 'error.background',
      color: 'error.text',
    },
    submitButton: {
      width: '100px',
      margin: 'auto',
      marginTop: 's',
      border: 'accent',
      borderRadius: 's',
      cursor: 'pointer',
      fontSize: 'm',
      color: 'primary.900',
      backgroundColor: 'primary.50',
      _hover: {
        color: 'white',
        backgroundColor: 'primary.500',
      },
      transition: 'all 0.1s ease-in-out',
      boxShadow: 'solid',
    },
    errorText: {
      marginTop: 'm',
      color: 'error.text',
      textAlign: 'center',
    },
    thankYouText: {
      padding: 'xxl',
      fontSize: 'xxl',
      fontWeight: 'bold',
      sDown: {
        fontSize: 'l',
      },
      sToM: {
        fontSize: 'xl',
      },
    },
    spinner: {
      animation: `spin 1s infinite linear`,
      margin: 'auto',
    },
  },
});

export default styles;
