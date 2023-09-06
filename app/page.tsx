import Scene from '../components/Scene'
import React from 'react'
import {toXYZ} from '../utils/converters'
import Exoplanet from '../models/Exoplanet'
import dbConnect from '../lib/dbConnect'

export const getData = async () => {
  await dbConnect()
  
  const result = await Exoplanet.find({})
  const exoplanets = result.map((doc) => {
    const exoplanet = doc.toObject()
    return exoplanet
  })

  return { props: { exoplanets: exoplanets } }
}

export default async function Home() {
  const data = await getData()
  const children = data.props.exoplanets.map((exoplanet) => ({
    id: exoplanet._id.toString(),
    coords: toXYZ(exoplanet.glat, exoplanet.glon, exoplanet.sy_dist),
    name: exoplanet.pl_name
  }))

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Scene data={...children} />
    </div>
  )
}
