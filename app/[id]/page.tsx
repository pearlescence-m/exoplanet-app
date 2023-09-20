import PlanetarySystem from '@/components/PlanetarySystem'
import Exoplanet from '../../models/Exoplanet'
import dbConnect from '@/lib/dbConnect'
import { Exoplanets } from 'Exoplanets'

const getPlanetData = async (paramId: string): Promise<Exoplanets> => {
  await dbConnect()
  const exoplanet = await Exoplanet.findById(paramId)
  const serializedExoplanet = exoplanet.toObject()
  return serializedExoplanet
}

export default async function ExoplanetSystemPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  const exodata = await JSON.parse(
    JSON.stringify(await getPlanetData(params.id))
  )

  return (
    <div>
      <PlanetarySystem data={exodata} />
    </div>
  )
}
