import "./style.css";
import { FragmentType, graphql, getFragmentData } from "../../generated/index";

export const ProjectFragment = graphql(/* GraphQL */ `
  fragment ProjectField on Project {
    name
    tagline
  }
`);

interface ContainerProps {
  name: string;
  projects?: FragmentType<typeof ProjectFragment>[];
}

const ExploreContainer: React.FC<ContainerProps> = (props) => {
  const projectData = getFragmentData(ProjectFragment, props.projects);

  return (
    <div className="container">
      <strong>{props.name}</strong>
      <div>
        {projectData &&
          projectData.map((data: any, index: any) => {
            return (
              <div key={"p-" + index}>
                Name: {data.name}
                <br />
                Tagline: {data.tagline}
              </div>
            );
          })}
      </div>
      <p>
        Explore{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://google.com">
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
