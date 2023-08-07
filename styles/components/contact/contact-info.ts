import createStyles from '@/styles/create-styles';
import { mq, THEME } from '@/styles/global-styles';

const styles = createStyles({
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minWidth: '50%',
    margin: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    [mq[1]]: {
      width: '100%',
    },
  },
  link: {
    textDecoration: 'none',
    verticalAlign: 'bottom',
    color: THEME.primary900,
  },
  icon: {
    marginRight: 8,
    verticalAlign: 'top',
  },
});

export default styles;
