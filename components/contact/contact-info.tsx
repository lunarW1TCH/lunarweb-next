import { FaLinkedin, FaGithub } from 'react-icons/fa';

import styles from './contact-info-styles';

const ContactInfo = () => {
  const classes = styles();

  return (
    <div className={classes.infoContainer}>
      <a className={classes.link} href='https://github.com/lunarW1TCH'>
        <FaGithub className={classes.icon} fontSize='18' />
        GitHub
      </a>
      <a
        className={classes.link}
        href='https://www.linkedin.com/in/adrian-zegnalek/'
      >
        <FaLinkedin className={classes.icon} fontSize='18' />
        LinkedIn
      </a>
    </div>
  );
};

export default ContactInfo;
