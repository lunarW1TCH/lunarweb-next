import createStyles from '@/styles/create-styles';
import { THEME, mq } from '@/styles/global-styles';

const styles = createStyles({
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: 'white',
    width: 500,
    padding: 30,
    borderRadius: 8,
    color: 'black',
    [mq[1]]: {
      width: '90%',
    },
  },
  header: {
    padding: 40,
    fontSize: 40,
    [mq[0]]: {
      fontSize: 28,
    },
    [mq[1]]: {
      fontSize: 32,
    },
  },
  paragraph: {
    textAlign: 'justify',
    a: {
      color: THEME.primary900,
    },
  },
  links: {
    marginTop: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  link: {
    paddingTop: 8,
    textDecoration: 'none',
    verticalAlign: 'bottom',
    color: THEME.primary900,
  },
  icon: {
    marginRight: 8,
    verticalAlign: 'top',
  },
  catCredit: {
    marginTop: 100,
    fontStyle: 'italic',
  },
});

export default styles;
