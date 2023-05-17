import Airtable from 'airtable';

const getAirtableData = async (options) => {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_SUMMER_23_API_KEY }).base(process.env.AIRTABLE_SUMMER_23_BASE_ID);
    const records = await base('_PROJECTS').select({}).all();
    // Process the records as needed
    const processedData = records.map((record) => {
      // Extract relevant data from the record
      const { id, fields } = record;
      return {
        id,
        ...fields,
      };
    });
    return processedData
}

export default getAirtableData