/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import Link from 'next/link';

import { THEME } from '@/styles/global-styles';
import styles from '@/styles/components/projects/project-item';

interface ProjectLink {
  name: string;
  link: string;
}

export interface ProjectItemProps {
  id: string;
  title: string;
  shortDescription: string;
  description: string[];
  technologies: string[];
  image: string;
  links: ProjectLink[];
}

const ProjectItem = (props: ProjectItemProps) => {
  const { title, shortDescription, image, technologies, links, id } = props;

  return (
    <div css={styles.projectContainer}>
      <div>
        <Link css={{ textDecoration: 'none' }} href={`/projects/${id}`}>
          <h2 css={styles.projectTitle}>{title}</h2>
        </Link>
        <div css={styles.imgContainer}>
          <Link href={`/projects/${id}`}>
            <FaArrowUpRightFromSquare
              color={THEME.primary900}
              css={styles.icon}
            />
            <Image
              width={500}
              height={500}
              alt={title}
              css={styles.projectImg}
              src={image}
            />
          </Link>
        </div>
      </div>
      <div css={styles.infoContainer}>
        <span css={styles.projectDescription}>{shortDescription}</span>
        <ul css={styles.projectTechnologies}>
          {technologies.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
