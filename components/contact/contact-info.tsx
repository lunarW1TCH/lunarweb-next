import { FaGithub, FaLinkedin } from 'react-icons/fa';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '../ui/button';
import styles from './contact-info-styles';

const ContactInfo = () => {
  const classes = styles();

  return (
    <Card className={classes.infoContainer}>
      <Button width='50%' variant='ghost' asChild>
        <a className={classes.link} href='https://github.com/lunarW1TCH'>
          <FaGithub className={classes.icon} fontSize='18' />
          GitHub
        </a>
      </Button>
      <Button width='50%' variant='ghost' asChild>
        <a
          className={classes.link}
          href='https://www.linkedin.com/in/adrian-zegnalek/'
        >
          <FaLinkedin className={classes.icon} fontSize='18' />
          LinkedIn
        </a>
      </Button>
    </Card>
  );

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
