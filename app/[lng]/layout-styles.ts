import { sva } from '@/styled-system/css';

const styles = sva({
  slots: ['rootContainer', 'mainContainer'],
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
  },
});

export default styles;
