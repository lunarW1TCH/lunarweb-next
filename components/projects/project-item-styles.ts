import { sva } from '@shadow-panda/styled-system/css';

const styles = sva({
  slots: [
    'icon',
    'imgContainer',
    'infoContainer',
    'projectContainer',
    'projectDescription',
    'projectImg',
    'projectTechnologies',
    'projectTitle',
  ],
  base: {
    projectContainer: {
      margin: 'm',
      minWidth: '350px',
      maxWidth: '400px',
      color: 'primary.700',
    },
    projectImg: {
      objectFit: 'cover',
      transition: 'all .1s ease-in-out',
      _hover: {
        transform: 'scale(1.1)',
      },
    },
    imgContainer: {
      overflow: 'hidden',
      border: 'base',
      borderRadius: 's',
      position: 'relative',
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'top',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    projectTitle: {
      color: 'primary.700',
      marginTop: 'l',
      marginBottom: 'l',
      textAlign: 'center',
      fontSize: 'm',
      fontWeight: 'bold',
      _hover: {
        color: 'primary.800',
        letterSpacing: '1px',
      },
      transition: 'all .2s ease-in-out',
    },
    projectDescription: {
      padding: 'xl',
      textAlign: 'justify',
    },
    projectTechnologies: {
      marginBottom: 'xl',
      listStyle: 'initial',
    },
    icon: {
      position: 'absolute',
      top: 0,
      right: 0,
      margin: 'm',
      padding: 's',
      width: '30px',
      height: '30px',
      backgroundColor: 'white',
      borderRadius: 'xs',
      color: 'primary.700',
    },
  },
});

export default styles;
