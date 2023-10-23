import { sva } from '@shadow-panda/styled-system/css';

const styles = sva({
  slots: [
    'detailsContainer',
    'detailsParagraph',
    'headerContainer',
    'headerTechnologies',
    'imgContainer',
    'link',
    'linksContainer',
    'list',
    'projectContainer',
    'projectHeader',
    'projectImg',
  ],
  base: {
    projectContainer: {
      marginY: 'xxl',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      color: 'primary.800',
    },
    headerContainer: {
      marginTop: 'm',
      display: 'flex',
      '& h1': {
        fontSize: 'xl',
      },
      flexDirection: 'row',
      mDown: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    headerTechnologies: {
      marginTop: 'l',
      marginBottom: 'l',
      color: 'primary.800',
      fontStyle: 'italic',
    },
    projectHeader: {
      margin: 'm',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      color: 'primary.800',
      textAlign: 'center',
      '& h1': {
        marginBottom: 'l',
        fontWeight: 'bold',
      },
    },
    projectImg: {
      minWidth: '300px',
      width: '300px',
      height: '300px',
      objectFit: 'cover',
    },
    imgContainer: {
      margin: 'm',
      minWidth: '300px',
      width: '300px',
      height: '300px',
      overflow: 'hidden',
      border: 'accent',
      borderRadius: 's',
      position: 'relative',
    },
    detailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      textAlign: 'center',
      color: 'primary.800',
    },
    detailsParagraph: {
      marginTop: 's',
      padding: 'l',
      color: 'primary.800',
    },
    linksContainer: {
      padding: 'l',
      display: 'flex',
      flexDirection: 'column',
      '& h2': {
        fontSize: 'm',
        fontWeight: 'bold',
        color: 'primary.800',
      },
    },
    list: {
      listStyle: 'none',
    },
    link: {
      marginBottom: 's',
      marginTop: 's',
      '& a': {
        color: 'primary.800',
        textDecoration: 'underline',
      },
    },
  },
});

export default styles;
