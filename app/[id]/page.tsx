import PlanetarySystem from '@/components/PlanetarySystem'
import Exoplanet from '../../models/Exoplanet'
import dbConnect from '@/lib/dbConnect'

export const getData = async (paramId: string) => {
  await dbConnect()
  if (!paramId) {
    return {
      notFound: true,
    }
  }
  const exoplanet = await Exoplanet.findById(paramId)

  const serializedExoplanet = exoplanet.toObject()
  return {
    props: {
      exoplanet: serializedExoplanet,
    },
  }
}

export default async function ExoplanetSystemPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  const exodata = await getData(params.id)
  return (
    <div>

      <p>{exodata.props?.exoplanet.pl_name}</p>
      {/* <PlanetarySystem data={exodata.props?.exoplanet}/> */}
    </div>
  )
}
