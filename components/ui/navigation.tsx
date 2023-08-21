'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './navigation-styles';

const Navigation = () => {
  const classes = styles();
  const pathname = usePathname();

  return (
    <nav className={classes.navContainer}>
      <ul className={classes.navList}>
        <Link
          className={`${classes.link} ${
            pathname === '/' ? classes.active : ''
          }`}
          href='/'
        >
          Home
        </Link>
        <Link
          className={`${classes.link} ${
            pathname === '/projects' ? classes.active : ''
          }`}
          href='/projects'
        >
          Projects
        </Link>
        <Link
          className={`${classes.link} ${
            pathname === '/skills' ? classes.active : ''
          }`}
          href='/skills'
        >
          Skills
        </Link>
        <Link
          className={`${classes.link} ${
            pathname === '/contact' ? classes.active : ''
          }`}
          href='/contact'
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
