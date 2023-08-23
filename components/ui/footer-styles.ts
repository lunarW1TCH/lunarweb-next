import { sva } from '@/styled-system/css';

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
      color: 'black',
      '& a': {
        color: 'black',
        marginLeft: 'xl',
        textDecoration: 'underline',
      },
    },
    langSelect: {
      marginLeft: 'xl',
      padding: 'xxs',
      borderRadius: 's',
      border: 'accent',
      color: 'primary.900',
    },
    detailsContainer: {},
  },
});

export default styles;
