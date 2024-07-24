import { Website, BrandAdvancement, AdvertisingMarketing } from './products'
import ProductNav from '../components/ProductNav'

export default function Products() {
  return (
    <main>
      <div className="min-h-screen">
        <Website />
        {/*<BrandAdvancement />
        <AdvertisingMarketing />*/}
      </div>
    </main>
  )
}
