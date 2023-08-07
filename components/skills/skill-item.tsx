/** @jsxImportSource @emotion/react */
import { FaStar, FaRegStar, FaCircle } from 'react-icons/fa';

import styles from '@/styles/components/skills/skill-item';

export interface SkillItemProps {
  title: string;
  description: string;
  category: string;
}

const SkillItem = (props: SkillItemProps) => {
  const { title, description, category } = props;

  let circleColor = '#008080';

  switch (category) {
    case 'Language':
      circleColor = '#008080';
      break;
    case 'Library/Framework':
      circleColor = '#ff85a2';
      break;
    case 'Tool/Other':
      circleColor = '#aaaaaa';
      break;
  }

  return (
    <div css={styles.skillContainer}>
      <div css={styles.dataContainer}>
        <span css={styles.skillTitle}>{title}</span>
        <span>
          <FaCircle css={styles.icon} color={circleColor} size='18' />
          {category}
        </span>
      </div>
      <span css={styles.skillDescription}>{description}</span>
    </div>
  );
};

export default SkillItem;
