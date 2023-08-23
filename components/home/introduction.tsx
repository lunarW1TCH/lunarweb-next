/* eslint-disable react-hooks/rules-of-hooks */

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './introduction-styles';
import { useTranslation } from '@/app/i18n/';
import Props from '@/interfaces/props';

const Introduction = async (props: Props) => {
  const { lng } = props;
  const { t } = await useTranslation(lng, 'home', {
    keyPrefix: 'introduction',
  });
  const classes = styles();

  return (
    <div className={classes.outerContainer}>
      <h1 className={classes.header}>
        {t('header-pt1')}
        <br />
        {t('header-pt2')}
      </h1>
      <div className={classes.innerContainer}>
        <p className={classes.paragraph}>{t('paragraph')}</p>
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
      <p className={classes.catCredit}> {t('cat-credit')}</p>
    </div>
  );
};

export default Introduction;
