import ProjectItem, {
  ProjectItemProps,
} from '@/components/projects/project-item';
import projects from '@/data/projects.json';

import styles from './styles';
import PageProps from '@/interfaces/page-props';
import { fallbackLng, languages } from '@/app/i18n/settings';

const ProjectsPage = async (props: PageProps) => {
  const { params } = props;
  let lng = params.lng;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  const projectsArray = projects as ProjectItemProps[];
  const classes = styles();

  return (
    <div>
      <div className={classes.projectsContainer}>
        {projectsArray.map(project => (
          <ProjectItem key={project.title} {...project} lng={lng} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
