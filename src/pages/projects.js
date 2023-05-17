import getAirtableData from "@/utilities/get-airtable-data"
import ListofProjects from "@/components/ListofProjects"
import NeonBox from "@/components/NeonBox"


export default (props) => {
    return (
        <div>
            {props.data.map(person=>{
                return (
                    <div>
                        <NeonBox>
                        <ListofProjects>{person.Metaprojects} {person.Title}</ListofProjects>
                        <p>{person.TwoThreeSentenceDescription}</p>
                        </NeonBox>
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
