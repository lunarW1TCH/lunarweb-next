import { sva } from '@shadow-panda/styled-system/css';

const styles = sva({
  slots: ['footer', 'langSelect', 'detailsContainer'],
  base: {
    footer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      backgroundColor: 'white',
      width: '100%',
      textAlign: 'center',
      fontSize: 'xs',
      padding: 's',
      position: 'sticky',
      color: 'primary.800',
      '& a': {
        color: 'primary.900',
        marginLeft: 'xl',
        textDecoration: 'underline',
      },
    },
    langSelect: {
      marginLeft: 'xl',
      padding: 'xxs',
      borderRadius: 's',
      border: 'accent',
      color: 'primary.800',
    },
    detailsContainer: {},
  },
});

export default styles;
