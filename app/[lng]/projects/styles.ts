import { sva } from '@/styled-system/css';

const styles = sva({
  slots: ['projectsContainer'],
  base: {
    projectsContainer: {
      height: '100%',
      width: '100%',
      marginTop: 'xl',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflowY: 'auto',
      justifyContent: 'center',
    },
  },
});

export default styles;
