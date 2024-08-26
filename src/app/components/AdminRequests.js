'use server'
import { MongoClient } from 'mongodb'

// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)
export default async function Stuff() {
  try {
    let arr = []
    let marr = []
    await client.connect()
    const db = client.db('Voyddfolio')
    const coll = db.collection('Requests')
    // find code goes here
    const cursor = coll.find({})
    marr.push(
      <>
        <h1 className="bg-gray-800 col-span-1">First Name</h1>
        <h1 className="bg-gray-800 col-span-5">Message</h1>
      </>
    )
    arr.push(
      <>
        <h1 className="bg-gray-800">First Name</h1>
        <h1 className="bg-gray-800">Last Name</h1>
        <h1 className="bg-gray-800">Company</h1>
        <h1 className="bg-gray-800">Email</h1>
        <h1 className="bg-gray-800">Phone Numbers</h1>
      </>
    )
    for await (let doc of cursor) {
      arr.push(
        <>
          <h1 className="bg-gray-500">{doc.first_name}</h1>
          <h1 className="bg-gray-500">{doc.last_name}</h1>
          <h1 className="bg-gray-500">{doc.company}</h1>
          <h1 className="bg-gray-500">{doc.email}</h1>
          <h1 className="bg-gray-500">{doc.number}</h1>
        </>
      ),
        marr.push(
          <>
            <h1 className="bg-gray-500 col-span-1">{doc.first_name}</h1>
            <h1 className="bg-gray-500 col-span-5">{doc.message}</h1>
          </>
        )
    }
    return (
      <>
        {arr.map((mapper) => {
          return (
            <div key={1} className="grid grid-cols-5">
              {mapper}
            </div>
          )
        })}
        <div className="divider h-10">Messages:</div>
        {marr.map((mapper) => {
          return (
            <div key={1} className="grid grid-cols-6">
              {mapper}
            </div>
          )
        })}
      </>
    )
  } finally {
  }
}
