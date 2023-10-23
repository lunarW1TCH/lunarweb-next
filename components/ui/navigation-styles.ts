import { sva } from '@shadow-panda/styled-system/css';

const styles = sva({
  slots: [
    'navContainer',
    'navList',
    'link',
    'active',
    'mobileNav',
    'desktopNav',
  ],
  base: {
    navContainer: {
      width: '100%',
      padding: 'xxs',
      backgroundColor: 'white',
      position: 'sticky',
    },
    navList: {
      listStyle: 'none',
      width: '100%',
      display: 'flex',
      fontSize: 'l',
      fontWeight: 'bold',
      justifyContent: 'space-around',
      color: 'primary.700',
      mDown: {
        justifyContent: 'space-between',
      },
    },
    link: {
      width: '100%',
      fontSize: 's',
    },
    mobileNav: {
      display: 'none',
      mDown: {
        display: 'block',
      },
    },
    desktopNav: {
      display: 'block',
      mDown: {
        display: 'none',
      },
    },
  },
});

export default styles;
