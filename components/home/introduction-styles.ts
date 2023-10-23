import { sva } from '@shadow-panda/styled-system/css';

const styles = sva({
  slots: [
    'outerContainer',
    'innerContainer',
    'header',
    'paragraph',
    'links',
    'link',
    'icon',
    'catCredit',
  ],
  base: {
    innerContainer: {
      paddingTop: 'l',
      width: '500px',
      mDown: {
        width: '90%',
      },
    },
    header: {
      padding: 'xxl',
      fontSize: 'xxl',
      fontWeight: 'bold',
      textAlign: 'center',
      sDown: {
        fontSize: 'l',
      },
      sToM: {
        fontSize: 'xl',
      },
    },
    paragraph: {
      textAlign: 'justify',
      color: 'primary.800',
    },
    link: {
      color: 'primary.800',

      '& svg': {
        color: 'primary.700',
      },
    },
  },
});

export default styles;
