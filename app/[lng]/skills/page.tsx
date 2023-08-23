import skills from '@/data/skills.json';
import SkillItem, { SkillItemProps } from '@/components/skills/skill-item';

import styles from './styles';
import PageProps from '@/interfaces/page-props';

const SkillsPage = async (props: PageProps) => {
  const { lng } = props.params;
  const skillsArray = skills as SkillItemProps[];
  const classes = styles();

  return (
    <div className={classes.pageContainer}>
      <div className={classes.skillsContainer}>
        {skillsArray
          .filter(skill => skill.category === 'language')
          .map(skill => (
            <SkillItem key={skill.title} {...skill} lng={lng} />
          ))}
        {skillsArray
          .filter(skill => skill.category === 'library')
          .map(skill => (
            <SkillItem key={skill.title} {...skill} lng={lng} />
          ))}
        {skillsArray
          .filter(skill => skill.category === 'tool')
          .map(skill => (
            <SkillItem key={skill.title} {...skill} lng={lng} />
          ))}
      </div>
    </div>
  );
};

export default SkillsPage;
