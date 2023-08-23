import { sva } from '@/styled-system/css';

const styles = sva({
  slots: ['contactContainer'],
  base: {
    contactContainer: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: '90%',
      minHeight: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export default styles;
