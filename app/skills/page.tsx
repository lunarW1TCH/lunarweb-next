import skills from '@/data/skills.json';
import SkillItem, { SkillItemProps } from '@/components/skills/skill-item';

import styles from './styles';

const SkillsPage = async () => {
  const skillsArray = skills as SkillItemProps[];
  const classes = styles();

  return (
    <div className={classes.pageContainer}>
      <div className={classes.skillsContainer}>
        {skillsArray
          .filter(skill => skill.category === 'Language')
          .map(skill => (
            <SkillItem key={skill.title} {...skill} />
          ))}
        {skillsArray
          .filter(skill => skill.category === 'Library/Framework')
          .map(skill => (
            <SkillItem key={skill.title} {...skill} />
          ))}
        {skillsArray
          .filter(skill => skill.category === 'Tool/Other')
          .map(skill => (
            <SkillItem key={skill.title} {...skill} />
          ))}
      </div>
    </div>
  );
};

export default SkillsPage;
