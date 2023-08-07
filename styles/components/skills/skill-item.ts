import createStyles from '@/styles/create-styles';
import { THEME, mq } from '@/styles/global-styles';

const styles = createStyles({
  skillContainer: {
    width: '95%',
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    border: `2px solid ${THEME.primary700}`,
    color: THEME.primary900,
    WebkitBoxShadow: '5px 5px 8px -5px rgba(66, 68, 90, 1)',
    MozBoxShadow: '5px 5px 8px -5px rgba(66, 68, 90, 1)',
    boxShadow: '5px 5px 8px -5px rgba(66, 68, 90, 1)',
  },
  dataContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    alignItems: 'center',
    width: '66%',
    span: {
      width: '33%',
      textAlign: 'left',
    },
    [mq[1]]: {
      flexDirection: 'column',
      float: 'left',
      alignItems: 'flex-start',
      flexGrow: 1,
      span: {
        padding: 4,
        width: '100%',
      },
    },
  },
  icon: {
    marginRight: 8,
    verticalAlign: 'text-top',
  },
  skillTitle: {
    fontWeight: 'bolder',
    marginRight: 8,
  },
  skillDescription: {
    width: '50%',
    textAlign: 'left',
  },
});

export default styles;
