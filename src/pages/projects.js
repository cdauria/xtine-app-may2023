import getAirtableData from "@/utilities/get-airtable-data"
import ListofProjects from "@/components/ProjectTitle"
import NeonBox from "@/components/NeonBox"
import Card from "@/components/Card"
import ProjectTitle from "@/components/ProjectTitle"
import ProjectDescription from "@/components/ProjectDescription"


export default (props) => {
    return (
        <div>
            {props.data.map(person=>{
                return (
                    <div>
                        <Card>
                        <ProjectTitle>{person.Metaprojects} {person.Title}</ProjectTitle>
                        <ProjectDescription>{person.TwoThreeSentenceDescription}</ProjectDescription>
                        </Card>
                     </div>
                )
            })}
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    )
}


  export async function getServerSideProps(context) {
    console.log("getting serverside props")
    console.log(JSON.stringify(context.params, null, 4))
    const processedData = await getAirtableData()
    console.log(JSON.stringify(processedData, null, 4))
    return {
      props: {
        data: processedData,
      },
    };
}
