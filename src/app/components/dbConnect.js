import { MongoClient } from 'mongodb'

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  'mongodb+srv://Voyddfolio:gxfyroJyDlMQxGFu@voyddfolio.uhx5yqc.mongodb.net/'
const client = new MongoClient(uri)
export default async function run(first, second, third, fourth, fifth, sixth) {
  try {
    await client.connect()
    const db = client.db('Voyddfolio')
    const coll = db.collection('Requests')

    const docs = {
      first_name: firstName,
      last_name: lastName,
      company: companyName,
      email: email,
      number: phoneNumber,
      message: message,
    }
    await coll.insertOne(docs)
  } finally {
    await client.close()
  }
}
