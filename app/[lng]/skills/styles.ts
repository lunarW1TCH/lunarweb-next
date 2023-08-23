import { sva } from '@/styled-system/css';

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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '80%',
      minHeight: '100px',
      margin: 'auto',
      marginTop: 'xxl',
      paddingTop: 'xl',
      paddingBottom: 'xl',
      marginBottom: 'xl',
      backgroundColor: 'white',
      borderRadius: 's',
      overflowY: 'auto',
      boxShadow: 'solid',
      mDown: {
        width: '90%',
      },
    },
  },
});

export default styles;
