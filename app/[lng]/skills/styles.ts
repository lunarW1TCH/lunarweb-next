import { sva } from '@shadow-panda/styled-system/css';

const styles = sva({
  slots: ['pageContainer', 'skillsContainer'],
  base: {
    pageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 'xl',
    },
    skillsContainer: {
      '& div': {
        marginY: 'xs',
      },
    },
  },
});

export default styles;
