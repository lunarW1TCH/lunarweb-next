import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './introduction-styles';

const Introduction = () => {
  const classes = styles();

  return (
    <div className={classes.outerContainer}>
      <h1 className={classes.header}>
        Hello, I am Adrian Żegnałek <br /> a software developer from Poznań
      </h1>
      <div className={classes.innerContainer}>
        <p className={classes.paragraph}>
          You can see some of my projects <a href='projects'>here</a> and on my
          GitHub account. Head on over to the <a href='skills'>skills</a> page
          to see the list of skills I have and technologies I worked with.
        </p>
        <div className={classes.links}>
          <span>
            <a className={classes.link} href='https://github.com/lunarW1TCH'>
              <FaGithub className={classes.icon} fontSize='18' />
              GitHub
            </a>
          </span>
          <span>
            <a
              className={classes.link}
              href='https://www.linkedin.com/in/adrian-zegnalek/'
            >
              <FaLinkedin className={classes.icon} fontSize='18' />
              LinkedIn
            </a>
          </span>
        </div>
      </div>
      <p className={classes.catCredit}>The cat name&apos;s Freja</p>
    </div>
  );
};

export default Introduction;
