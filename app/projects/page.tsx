import ProjectItem, {
  ProjectItemProps,
} from '@/components/projects/project-item';
import projects from '@/data/projects.json';

import styles from './styles';

const ProjectsPage = async () => {
  const projectsArray = projects as ProjectItemProps[];
  const classes = styles();

  return (
    <div>
      <div className={classes.projectsContainer}>
        {projectsArray.map(project => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
