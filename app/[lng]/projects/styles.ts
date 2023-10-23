import { sva } from '@shadow-panda/styled-system/css';

const styles = sva({
  slots: ['projectsContainer'],
  base: {
    projectsContainer: {
      height: '100%',
      width: '100%',
      marginY: 'xl',
      paddingBottom: 'xxl',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflowY: 'auto',
      justifyContent: 'center',
    },
  },
});

export default styles;
