'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Props from '@/interfaces/props';
import { useTranslation } from '@/app/i18n/client';
import { FaHome } from 'react-icons/fa';

import styles from './navigation-styles';

const Navigation = (props: Props) => {
  const { lng } = props;
  const { t } = useTranslation(lng, 'ui');
  const classes = styles();
  const pathname = usePathname();

  return (
    <nav className={classes.navContainer}>
      <ul className={classes.navList}>
        <Link
          className={`${classes.link} ${
            pathname === `/${lng}` ? classes.active : ''
          }`}
          href={`/${lng}`}
        >
          <FaHome />
        </Link>
        <Link
          className={`${classes.link} ${
            pathname === `/${lng}/projects` ? classes.active : ''
          }`}
          href={`/${lng}/projects`}
        >
          {t('nav.projects')}
        </Link>
        <Link
          className={`${classes.link} ${
            pathname === `/${lng}/skills` ? classes.active : ''
          }`}
          href={`/${lng}/skills`}
        >
          {t('nav.skills')}
        </Link>
        <Link
          className={`${classes.link} ${
            pathname === `/${lng}/contact` ? classes.active : ''
          }`}
          href={`/${lng}/contact`}
        >
          {t('nav.contact')}
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
