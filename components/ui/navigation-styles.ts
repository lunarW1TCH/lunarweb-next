import { sva } from '@/styled-system/css';

const styles = sva({
  slots: ['navContainer', 'navList', 'link', 'active'],
  base: {
    navContainer: {
      width: '100%',
      padding: 's',
      backgroundColor: 'white',
      position: 'sticky',
    },
    navList: {
      listStyle: 'none',
      width: '100%',
      display: 'flex',
      fontSize: 'm',
      fontWeight: 'bold',
      justifyContent: 'space-around',
    },
    link: {
      textDecoration: 'none',
      textAlign: 'center',
      flexGrow: 1,
      margin: 0,
      marginLeft: 'xxs',
      marginRight: 'xxs',
      color: 'primary.600',
      borderRadius: 's',
      _hover: {
        color: 'white',
        backgroundColor: 'primary.500',
      },
      transition: 'all 0.1s ease-in-out',
    },
    active: {
      color: 'primary.900',
      backgroundColor: 'primary.50',
      borderRadius: 's',
      opacity: 0.85,
    },
  },
});

export default styles;
