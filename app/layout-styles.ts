import { sva } from '@/styled-system/css';

const styles = sva({
  slots: ['rootContainer', 'mainContainer', 'footer'],
  base: {
    rootContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
    },
    mainContainer: { width: '100%' },
    footer: {
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
  },
});

export default styles;
