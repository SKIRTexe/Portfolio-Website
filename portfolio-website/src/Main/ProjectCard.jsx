import "./ProjectCard.css"
function ProjectCard(props){
    return <div>
        <img className="project-image" src={props.img} alt="this is a cool render of my door lock! :smile:"/>
<br />
<div className="project-description">{props.description}</div>
    </div>
}
export default ProjectCard