import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { fallbackLng, languages } from '@/app/i18n/settings';
import { ProjectItemProps } from '@/components/projects/project-item';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import projects from '@/data/projects.json';
import { VStack } from '@shadow-panda/styled-system/jsx';

import styles from './styles';

interface ProjectPageProps {
  params: {
    id: string;
    lng: string;
  };
}

const ProjectPage = async (props: ProjectPageProps) => {
  const { params } = props;
  let lng = params.lng;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'projects');

  const classes = styles();
  const { id } = params;

  const projectsArray = projects as ProjectItemProps[];
  const project = projectsArray.find(
    item => item.id === id
  ) as ProjectItemProps;

  const {
    image,
    links,
    technologies,
    title,
    description,
    shortDescription,
  } = project;

  return (
    <VStack className={classes.projectContainer}>
      <Card maxWidth='90%' width='90%'>
        <CardContent>
          <div className={classes.headerContainer}>
            <div className={classes.imgContainer}>
              <Image src={image} alt={title} width={500} height={500} />
            </div>
            <div className={classes.projectHeader}>
              <h1>{title}</h1>
              <p>{t(shortDescription)}</p>
              <p className={classes.headerTechnologies}>
                {technologies.toString().replaceAll(',', ', ')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card maxWidth='90%' width='90%'>
        <CardContent>
          <div className={classes.detailsContainer}>
            {description.length > 0 &&
              description.map(item => (
                <p className={classes.detailsParagraph} key={item}>
                  {t(item)}
                </p>
              ))}
            {links.length > 0 && (
              <div className={classes.linksContainer}>
                <h2>Links</h2>
                <ul className={classes.list}>
                  {links.map(link => (
                    <li className={classes.link} key={link.name}>
                      <Link href={link.link}>{t(link.name)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </VStack>
  );
};

export default ProjectPage;

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const projectsArray = projects as ProjectItemProps[];
  const paths = projectsArray.map(project => ({
    params: { id: project.id },
  }));

  return paths;
};
