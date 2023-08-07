/** @jsxImportSource @emotion/react */
import skills from '@/data/skills.json';
import SkillItem, { SkillItemProps } from '@/components/skills/skill-item';
import styles from '@/styles/pages/skills/index';

interface SkillsPageProps {
  skillsArray: SkillItemProps[];
}

const SkillsPage = (props: SkillsPageProps) => {
  const { skillsArray } = props;

  return (
    <div css={styles.skillsContainer}>
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
  );
};

export default SkillsPage;

export const getStaticProps = async () => {
  const skillsArray = skills as SkillItemProps[];
  return {
    props: {
      skillsArray,
    },
  };
};
