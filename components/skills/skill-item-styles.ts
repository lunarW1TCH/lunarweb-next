import { sva } from '@/styled-system/css';

const styles = sva({
  slots: [
    'dataContainer',
    'icon',
    'skillContainer',
    'skillDescription',
    'skillTitle',
    'iconContainer',
  ],
  base: {
    skillContainer: {
      width: '95%',
      marginTop: 's',
      marginBottom: 's',
      padding: 's',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 'm',
      border: 'accent',
      color: 'primary.900',
      boxShadow: 'solid',
    },
    dataContainer: {
      display: 'flex',
      height: '100%',
      flexWrap: 'wrap',
      justifyContent: 'left',
      alignItems: 'center',
      width: '66%',
      '& span': {
        width: '33%',
        textAlign: 'left',
      },
      mDown: {
        flexDirection: 'column',
        float: 'left',
        alignItems: 'flex-start',
        flexGrow: 1,
        '& span': {
          padding: 'xs',
          width: '100%',
        },
      },
    },
    iconContainer: {
      display: 'flex',
    },
    icon: {
      marginTop: 'xs',
      marginRight: 's',
      verticalAlign: 'bottom',
      mDown: {
        marginTop: 'xxs',
      },
    },
    skillTitle: {
      fontWeight: 'bold',
      marginRight: 's',
    },
    skillDescription: {
      width: '50%',
      textAlign: 'left',
    },
  },
});

export default styles;
