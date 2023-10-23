import { sva } from '@shadow-panda/styled-system/css';

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
    mainContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export default styles;
