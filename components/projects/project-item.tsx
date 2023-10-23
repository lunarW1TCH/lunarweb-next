/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

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
import { VStack } from '@shadow-panda/styled-system/jsx';

import styles from './project-item-styles';

interface ProjectLink {
  name: string;
  link: string;
}

export interface ProjectItemProps extends Props {
  id: string;
  title: string;
  shortDescription: string;
  description: string[];
  technologies: string[];
  image: string;
  links: ProjectLink[];
}

const ProjectItem = async (props: ProjectItemProps) => {
  const {
    title,
    shortDescription,
    image,
    technologies,
    links,
    id,
    lng,
  } = props;
  const { t } = await useTranslation(lng, 'projects');
  const classes = styles();

  return (
    <Card className={classes.projectContainer}>
      <CardHeader>
        <CardTitle>
          <Link href={`${lng}/projects/${id}`}>
            <h2 className={classes.projectTitle}>{title}</h2>
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <VStack
          aspectRatio={'1/1'}
          margin='auto'
          className={classes.imgContainer}
        >
          <Link href={`/projects/${id}`}>
            <FaArrowUpRightFromSquare className={classes.icon} />
            <Image
              width={500}
              height={500}
              alt={title}
              src={image}
              className={classes.projectImg}
            />
          </Link>
        </VStack>
      </CardContent>
      <CardFooter>
        <div className={classes.infoContainer}>
          <span className={classes.projectDescription}>
            {t(shortDescription)}
          </span>
          <ul className={classes.projectTechnologies}>
            {technologies.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <div className={classes.projectContainer}>
      <div>
        <Link href={`${lng}/projects/${id}`}>
          <h2 className={classes.projectTitle}>{title}</h2>
        </Link>
        <div className={classes.imgContainer}>
          <Link href={`/projects/${id}`}>
            <FaArrowUpRightFromSquare className={classes.icon} />
            <Image
              width={500}
              height={500}
              alt={title}
              src={image}
              className={classes.projectImg}
            />
          </Link>
        </div>
      </div>
      <div className={classes.infoContainer}>
        <span className={classes.projectDescription}>
          {t(shortDescription)}
        </span>
        <ul className={classes.projectTechnologies}>
          {technologies.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
