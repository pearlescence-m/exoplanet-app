import Scene from '../components/Scene'
import React from 'react'
import { toXYZ } from '../utils/converters'
import Exoplanet from '../models/Exoplanet'
import dbConnect from '../lib/dbConnect'
import { ExoplanetPropsWithID } from 'Exoplanets'

const getAllPlanets = async (): Promise<ExoplanetPropsWithID[]> => {
  await dbConnect()

  const result = await Exoplanet.find({})
  const exoplanets = result.map((doc) => {
    const exoplanet = doc.toObject()
    return exoplanet
  })
  return exoplanets
}

export default async function Home() {
  const data: ExoplanetPropsWithID[] = await getAllPlanets()
  const filteredData = data.map(({...rest }) => rest);
  const children = filteredData.map((exoplanet) => ({
    id: exoplanet._id.toString(),
    coords: toXYZ(exoplanet.glat, exoplanet.glon, exoplanet.sy_dist),
    name: exoplanet.pl_name,
  }))

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Scene data={...children} />
    </div>
  )
}
