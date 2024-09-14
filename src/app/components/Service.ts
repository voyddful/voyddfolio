import { cache } from 'react'
import dbConnect from './dbConnect'
import RequestModel, { Request } from './RequestModel'

export const revalidate = 3600

const getLatest = cache(async () => {
  await dbConnect()
  const products = await RequestModel.find({}).sort({ _id: -1 }).limit(4).lean()
  return products as Request[]
})

const productService =  getLatest
  
export default productService
  