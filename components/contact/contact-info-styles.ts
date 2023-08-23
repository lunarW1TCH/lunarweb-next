import { sva } from '@/styled-system/css';

const styles = sva({
  slots: ['infoContainer', 'icon', 'link'],
  base: {
    infoContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      minWidth: '50%',
      margin: 'l',
      padding: 'm',
      borderRadius: 's',
      backgroundColor: 'white',
      boxShadow: 'solid',
      mDown: {
        width: '100%',
      },
    },
    link: {
      display: 'flex',
      textDecoration: 'none',
      verticalAlign: 'bottom',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'primary.900',
      padding: 'xs',
      borderRadius: 's',
      _hover: {
        color: 'white',
        backgroundColor: 'primary.500',
        '& svg': {
          color: 'white',
        },
      },
      '& svg': {
        color: 'primary.700',
      },
      transition: 'all 0.1s ease-in-out',
    },
    icon: {
      marginRight: 's',
      verticalAlign: 'top',
    },
  },
});

export default styles;
