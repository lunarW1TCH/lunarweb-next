import { sva } from '@/styled-system/css';

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
    outerContainer: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainer: {
      backgroundColor: 'white',
      width: '500px',
      padding: 'xxl',
      borderRadius: 's',
      color: 'black',
      boxShadow: 'solid',

      mDown: {
        width: '90%',
        padding: 'l',
      },
    },
    header: {
      padding: 'xxl',
      fontSize: 'xxl',
      fontWeight: 'bold',
      sDown: {
        fontSize: 'l',
      },
      sToM: {
        fontSize: 'xl',
      },
    },
    paragraph: {
      textAlign: 'justify',
      '& a': {
        color: 'primary.900',
        textDecoration: 'underline',
      },
    },
    links: {
      marginTop: 'l',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      '& span': {
        width: '100%',
      },
    },
    link: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 's',
      textDecoration: 'none',
      verticalAlign: 'bottom',
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
    },
    catCredit: {
      marginTop: 'xxxl',
      marginBottom: 'm',
      fontStyle: 'italic',
    },
  },
});

export default styles;
