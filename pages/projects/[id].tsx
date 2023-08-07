/** @jsxImportSource @emotion/react */
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { ProjectItemProps } from '@/components/projects/project-item';
import projects from '@/data/projects.json';
import styles from '@/styles/pages/projects/[id]';
import { THEME } from '@/styles/global-styles';

interface ProjectPageProps {
  project: ProjectItemProps;
}

const ProjectPage = (props: ProjectPageProps) => {
  const { image, links, technologies, title, description, shortDescription } =
    props.project;

  return (
    <div css={styles.projectContainer}>
      <div css={styles.headerContainer}>
        <div css={styles.imgContainer}>
          <Image
            css={styles.projectImg}
            src={image}
            alt={title}
            width={500}
            height={500}
          />
        </div>
        <div css={styles.projectHeader}>
          <h1>{title}</h1>
          <p>{shortDescription}</p>
          <p css={styles.headerTechnologies}>
            {technologies.toString().replaceAll(',', ', ')}
          </p>
        </div>
      </div>
      <div css={styles.detailsContainer}>
        {description.length > 0 &&
          description.map(item => (
            <p css={styles.detailsParagraph} key={item}>
              {item}
            </p>
          ))}
        {links.length > 0 && (
          <div css={styles.linksContainer}>
            <h2>Links</h2>
            <ul css={styles.list}>
              {links.map(link => (
                <li css={styles.link} key={link.name}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const projectsArray = projects as ProjectItemProps[];
  const paths = projectsArray.map(project => ({ params: { id: project.id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const projectsArray = projects as ProjectItemProps[];
  const params = context.params as ParsedUrlQuery;

  if (!params.id) {
    return {
      notFound: true,
    };
  }

  const project = projectsArray.find(item => item.id === params.id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};
