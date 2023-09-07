import { Vector3 } from 'three'

export function toXYZ(
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

export const semiMinorRadius = (
  semiMajorRadius: number,
  eccentricity: number
): number => {
  const R = semiMajorRadius * Math.sqrt(1 - (eccentricity ** 2))
  return R
}