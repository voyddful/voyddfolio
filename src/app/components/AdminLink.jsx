'use server'
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

    let docs = {
      first_name: first,
      last_name: second,
      company: third,
      email: fourth,
      number: fifth,
      message: sixth,
      id: 1,
    }
    let request = await coll.insertOne(docs)
  } finally {
    await client.close()
  }
}
