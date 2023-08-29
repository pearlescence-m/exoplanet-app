import Scene from '../components/Scene'
import React from 'react'
import toXYZ from '../utils/converters'
import Exoplanet from '../models/Exoplanet'
import dbConnect from '../lib/dbConnect'

export async function getServerSideProps() {
  await dbConnect()
  
  const result = await Exoplanet.find({})
  const exoplanets = result.map((doc) => {
    const exoplanet = doc.toObject()
    exoplanet._id = exoplanet._id.toString()
    return exoplanet
  })

  return { props: { exoplanets: exoplanets } }
}

export default async function Home() {
  const data = await getServerSideProps()
  const coordinates = data.props.exoplanets.map((exoplanet) => ({
    id: exoplanet._id,
    coords: toXYZ(exoplanet.glat, exoplanet.glon, exoplanet.sy_dist),
  }))

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Scene data={...coordinates} />
    </div>
  )
}
