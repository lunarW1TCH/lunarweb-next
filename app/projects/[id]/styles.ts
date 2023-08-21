import { sva } from '@/styled-system/css';

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
      marginTop: 'xxl',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      color: 'primary.900',
    },
    headerContainer: {
      display: 'flex',
      backgroundColor: 'white',
      borderRadius: 'l',
      padding: 'l',
      width: '80%',
      '& h1': {
        fontSize: 'xl',
      },
      mDown: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    headerTechnologies: {
      marginTop: 'l',
      marginBottom: 'l',
      fontStyle: 'italic',
    },
    projectHeader: {
      margin: 'm',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
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
      marginTop: 'xl',
      marginBottom: 'xl',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      borderRadius: 'l',
      width: '80%',
      textAlign: 'center',
    },
    detailsParagraph: {
      marginTop: 's',
      padding: 'l',
    },
    linksContainer: {
      padding: 'l',
      display: 'flex',
      flexDirection: 'column',
      '& h2': {
        fontSize: 'm',
        fontWeight: 'bold',
      },
    },
    list: {
      listStyle: 'none',
    },
    link: {
      marginBottom: 's',
      marginTop: 's',
      '& a': {
        color: 'primary.900',
        textDecoration: 'underline',
      },
    },
  },
});

export default styles;
