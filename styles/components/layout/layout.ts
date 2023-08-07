import createStyles from '@/styles/create-styles';

const styles = createStyles({
  rootContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  mainContainer: { width: '100%' },
  footer: {
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    padding: 10,
    position: 'sticky',
    color: 'black',
    a: {
      color: 'black',
      marginLeft: 30,
    },
  },
});

export default styles;
