import createStyles from '@/styles/create-styles';
import { THEME, mq } from '@/styles/global-styles';

const styles = createStyles({
  projectContainer: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    color: THEME.primary900,
  },
  headerContainer: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    width: '80%',
    [mq[1]]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  headerTechnologies: {
    marginTop: 16,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  projectHeader: {
    margin: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    h1: {
      marginBottom: 16,
    },
  },
  projectImg: {
    minWidth: 300,
    width: 300,
    height: 300,
    objectFit: 'cover',
  },
  imgContainer: {
    margin: 10,
    minWidth: 300,
    width: 300,
    height: 300,
    overflow: 'hidden',
    border: `2px solid ${THEME.primary700}`,
    borderRadius: 8,
    position: 'relative',
  },
  detailsContainer: {
    marginTop: 24,
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 16,
    width: '80%',
    textAlign: 'center',
  },
  detailsParagraph: {
    marginTop: 8,
    padding: 16,
  },
  linksContainer: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    listStyle: 'none',
  },
  link: {
    marginBottom: 8,
    marginTop: 8,
    a: {
      color: THEME.primary900,
    },
  },
});

export default styles;
