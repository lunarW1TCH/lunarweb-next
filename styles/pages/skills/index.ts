import { mq } from '@/styles/global-styles';
import createStyles from '@/styles/create-styles';

const styles = createStyles({
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    minHeight: 100,
    margin: 'auto',
    marginTop: 50,
    paddingTop: 25,
    paddingBottom: 25,
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 8,
    overflowY: 'auto',
    [mq[1]]: {
      width: '90%',
      overflowY: 'unset',
    },
  },
});

export default styles;
