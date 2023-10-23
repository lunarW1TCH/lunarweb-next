/* eslint-disable react-hooks/rules-of-hooks */

import { FaCircle } from 'react-icons/fa';

import { useTranslation } from '@/app/i18n';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Props from '@/interfaces/props';
import { css } from '@shadow-panda/styled-system/css';
import { HStack, VStack } from '@shadow-panda/styled-system/jsx';

import styles from './skill-item-styles';

export interface SkillItemProps extends Props {
  title: string;
  description: string;
  category: string;
}

const SkillItem = async (props: SkillItemProps) => {
  const { title, description, category, lng } = props;
  const { t } = await useTranslation(lng, 'skills');
  const classes = styles();

  let iconColor;

  switch (category) {
    case 'language':
      iconColor = css({
        color: 'categories.language',
      });
      break;
    case 'library':
      iconColor = css({
        color: 'categories.library',
      });
      break;
    case 'tool':
      iconColor = css({
        color: 'categories.tool',
      });
      break;
    default:
      iconColor = css({
        color: 'categories.tool',
      });
  }

  return (
    <Card width='100%'>
      <CardContent width='100%' className={classes.skillContainer}>
        <HStack className={classes.dataContainer}>
          <span className={classes.skillTitle}>{title}</span>
          <span className={classes.iconContainer}>
            <FaCircle className={`${classes.icon} ${iconColor}`} />
            {t(`category.${category}`)}
          </span>
        </HStack>
        <span className={classes.skillDescription}>
          {description && t(`description.${description}`)}
        </span>
      </CardContent>
    </Card>
  );

  return (
    <div className={classes.skillContainer}>
      <div className={classes.dataContainer}>
        <span className={classes.skillTitle}>{title}</span>
        <span className={classes.iconContainer}>
          <FaCircle className={`${classes.icon} ${iconColor}`} />
          {t(`category.${category}`)}
        </span>
      </div>
      <span className={classes.skillDescription}>
        {description && t(`description.${description}`)}
      </span>
    </div>
  );
};

export default SkillItem;
