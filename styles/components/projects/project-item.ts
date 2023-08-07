import createStyles from '@/styles/create-styles';
import { THEME } from '@/styles/global-styles';

const styles = createStyles({
  projectContainer: {
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    width: 350,
    color: THEME.primary900,
  },
  projectImg: {
    width: 300,
    height: 300,
    objectFit: 'cover',
    transition: 'all .1s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  imgContainer: {
    width: 300,
    height: 300,
    overflow: 'hidden',
    border: `2px solid ${THEME.primary700}`,
    borderRadius: 8,
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
    color: THEME.primary700,
    marginTop: 25,
    marginBottom: 25,
  },
  projectDescription: {
    padding: 20,
    textAlign: 'justify',
  },
  projectTechnologies: {
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10,
    padding: 6,
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});

export default styles;
