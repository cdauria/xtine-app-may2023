import Link from "next/link"

const ProjectLink = (props) => {
    return (
        <div>
            <Link href={props.link}>{props.name}</Link>
        </div>
    )
}

export default ProjectLink