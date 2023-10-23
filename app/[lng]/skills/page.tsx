import SkillItem, { SkillItemProps } from '@/components/skills/skill-item';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import skills from '@/data/skills.json';
import PageProps from '@/interfaces/page-props';
import { VStack } from '@shadow-panda/styled-system/jsx';

import styles from './styles';

const SkillsPage = async (props: PageProps) => {
  const { lng } = props.params;
  const skillsArray = skills as SkillItemProps[];
  const classes = styles();

  return (
    <VStack
      marginY='m'
      maxWidth='60%'
      lDown={{ maxWidth: '100%' }}
      justifyContent='center'
    >
      <Card margin='m' width='95%'>
        <CardContent
          paddingTop='l'
          width='100%'
          className={classes.skillsContainer}
        >
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
            ))}{' '}
        </CardContent>
      </Card>
    </VStack>
  );

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
