/* eslint-disable react-hooks/rules-of-hooks */

import { FaCircle } from 'react-icons/fa';
import { css } from '@/styled-system/css';

import styles from './skill-item-styles';
import Props from '@/interfaces/props';
import { useTranslation } from '@/app/i18n';

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
  }

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
