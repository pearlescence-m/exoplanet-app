import { Vector3 } from 'three'

export default function toXYZ(
  galacticLatitude: number | null,
  galacticLongitude: number | null,
  distance: number | null
): Vector3 {
  const CartesianDistance = Number(distance)
  const theta = Number(galacticLatitude) * (Math.PI / 180)
  const phi = Number(galacticLongitude) * (Math.PI / 180)

  const x = CartesianDistance * Math.cos(theta) * Math.cos(phi)
  const y = CartesianDistance * Math.cos(theta) * Math.sin(phi)
  const z = CartesianDistance * Math.sin(theta)

  return new Vector3(Math.round(x), Math.round(y), Math.round(z))
}
