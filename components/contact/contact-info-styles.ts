import { sva } from '@shadow-panda/styled-system/css';

const styles = sva({
  slots: ['infoContainer', 'icon', 'link'],
  base: {
    infoContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      minWidth: '50%',
      marginY: 'm',
      mDown: {
        width: '100%',
      },
    },
    link: {
      color: 'primary.800',
    },
    icon: {
      marginRight: 's',
      verticalAlign: 'top',
      fill: 'primary.700',
    },
  },
});

export default styles;
