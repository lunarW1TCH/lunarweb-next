import Image from 'next/image';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import Link from 'next/link';

import styles from './project-item-styles';

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
  const classes = styles();

  return (
    <div className={classes.projectContainer}>
      <div>
        <Link href={`/projects/${id}`}>
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
        <span className={classes.projectDescription}>{shortDescription}</span>
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
