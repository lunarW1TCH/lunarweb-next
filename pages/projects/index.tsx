/** @jsxImportSource @emotion/react */
import ProjectItem, {
  ProjectItemProps,
} from '@/components/projects/project-item';
import styles from '@/styles/pages/projects/index';

import projects from '@/data/projects.json';

interface ProjectsPageProps {
  projectsArray: ProjectItemProps[];
}

const ProjectsPage = (props: ProjectsPageProps) => {
  const { projectsArray } = props;

  return (
    <div>
      <div css={styles.projectsContainer}>
        {projectsArray.map(project => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

export const getStaticProps = async () => {
  const projectsArray = projects as ProjectItemProps[];
  return {
    props: {
      projectsArray,
    },
  };
};
