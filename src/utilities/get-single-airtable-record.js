import Airtable from 'airtable';

async function getOneByValue(options) {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_SUMMER_23_API_KEY }).base(process.env.AIRTABLE_SUMMER_23_BASE_ID);
    return new Promise((resolve, reject) => {
        base(options.table)
            .select({
                filterByFormula: `${options.field}='${options.value}'`,
                maxRecords: 1
            })
            .firstPage(function(err, records) {
                if (err) {
                    reject(err);
                } else {
                    resolve(records);
                }
            });
    });
}

const getSingleAirtableRecord = async (options) => {
  try {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_SUMMER_23_API_KEY }).base(process.env.AIRTABLE_SUMMER_23_BASE_ID);
    const records = await getOneByValue({
      table: options.table,
      field: options.field,
      value: options.value
    });
    const processedData = records.map((record) => {
      // Extract relevant data from the record
      const { id, fields } = record;
      return {
        id,
        ...fields,
      };
    });
    return processedData[0]
  } catch (error) {
    return {error: "no data", options: options}
  }
}

export default getSingleAirtableRecord