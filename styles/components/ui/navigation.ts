import createStyles from '@/styles/create-styles';
import { THEME } from '@/styles/global-styles';

const styles = createStyles({
  navContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    position: 'sticky',
  },
  navList: {
    listStyle: 'none',
    width: '100%',
    display: 'flex',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'space-around',
    a: {
      textDecoration: 'none',
      textAlign: 'center',
      flexGrow: 1,
      margin: 0,
      color: THEME.primary600,
      '&:hover': {
        color: THEME.primary900,
      },
    },
  },
  active: {
    color: THEME.primary900,
  },
  inactive: {},
});

export default styles;
