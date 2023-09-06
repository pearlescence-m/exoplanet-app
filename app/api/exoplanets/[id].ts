import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import Exoplanet from '../../../models/Exoplanet'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const exoplanet = await Exoplanet.findById(id)
        if (!exoplanet) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: exoplanet })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    }
  }