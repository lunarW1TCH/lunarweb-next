import { FaCircle } from 'react-icons/fa';
import { css } from '@/styled-system/css';

import styles from './skill-item-styles';

export interface SkillItemProps {
  title: string;
  description: string;
  category: string;
}

const SkillItem = (props: SkillItemProps) => {
  const { title, description, category } = props;
  const classes = styles();

  let iconColor;

  switch (category) {
    case 'Language':
      iconColor = css({
        color: 'categories.language',
      });
      break;
    case 'Library/Framework':
      iconColor = css({
        color: 'categories.library',
      });
      break;
    case 'Tool/Other':
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
          {category}
        </span>
      </div>
      <span className={classes.skillDescription}>{description}</span>
    </div>
  );
};

export default SkillItem;
