/import ListofProjects from "@/components/ListofProjects"
import getSingleAirtableRecord from "@/utilities/get-single-airtable-record"


export default (props) => {
    return (
        <div>
            <ListofProjects>{props.data.Title}</ListofProjects>
            <h2>{props.data.Metaprojects}</h2>
            <p>{props.data.TwoThreeSentenceDescription}</p>
        </div>
    )
}


export async function getServerSideProps(context) {
    console.log("getting serverside props")
    console.log(JSON.stringify(context.params, null, 4))
    const processedData = await getSingleAirtableRecord({
      table: "_PROJECTS",
      field: "SlugFormula",
      value: context.params.projectname
    })
    return {
      props: {
        data: processedData,
        projectname: context.params.projectname
      },
    };
  }