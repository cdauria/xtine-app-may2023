import getAirtableData from "@/utilities/get-airtable-data"
import ListofProjects from "@/components/ProjectTitle"
import NeonBox from "@/components/NeonBox"
import Card from "@/components/Card"
import ProjectTitle from "@/components/ProjectTitle"
import ProjectDescription from "@/components/ProjectDescription"
import Grid from "@/components/Grid"
import React from 'react'
import CardContent from "@/components/CardContent"
import CardHover from "@/components/CardHover"


export default (props) => {
    return (
        <div>
          <Grid>
            {props.data.map((person) => (
              <div key={person.id}>
                        <Card>
                          <CardContent>
                              <CardHover>
                        <ProjectTitle>{person.Metaprojects} {person.Title}</ProjectTitle>
                        <ProjectDescription>{person.TwoThreeSentenceDescription}</ProjectDescription>
                              </CardHover>
                          </CardContent>
                        </Card>
                     </div>
                ))}
          </Grid>
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    );
};





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
