/* eslint-disable react-hooks/rules-of-hooks */

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { useTranslation } from '@/app/i18n/';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Props from '@/interfaces/props';
import { HStack, VStack } from '@shadow-panda/styled-system/jsx';

import { Button } from '../ui/button';
import styles from './introduction-styles';

const Introduction = async (props: Props) => {
  const { lng } = props;
  const { t } = await useTranslation(lng, 'home', {
    keyPrefix: 'introduction',
  });
  const classes = styles();

  return (
    <VStack>
      <h1 className={classes.header}>
        {t('header-pt1')}
        <br />
        {t('header-pt2')}
      </h1>
      <Card className={classes.innerContainer}>
        <CardContent paddingBottom={0}>
          <p className={classes.paragraph}>{t('paragraph')}</p>
          <HStack marginY='m' width='100%'>
            <Button width='50%' variant='ghost' asChild>
              <a className={classes.link} href='https://github.com/lunarW1TCH'>
                <FaGithub fontSize='18' />
                GitHub
              </a>
            </Button>
            <Button width='50%' variant='ghost' asChild>
              <a
                className={classes.link}
                href='https://www.linkedin.com/in/adrian-zegnalek/'
              >
                <FaLinkedin fontSize='18' />
                LinkedIn
              </a>
            </Button>
          </HStack>
        </CardContent>
      </Card>
    </VStack>
  );

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
