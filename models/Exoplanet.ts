import mongoose from 'mongoose'

export interface Exoplanets extends mongoose.Document {
  pl_name: string
  hostname: string
  pl_letter: string
  sy_snum: number
  sy_pnum: number
  sy_mnum: number
  cb_flag: number
  discoverymethod: string
  disc_year: number
  disc_facility: string
  pl_controv_flag: number
  pl_orbper: number
  pl_orbsmax: number
  pl_rade: number
  pl_radj: number
  pl_bmasse: number
  pl_bmassj: number
  pl_dens: number
  pl_orbeccen: number
  pl_orbincl: number
  ttv_flag: number
  pl_imppar: number
  st_spectype: string
  st_rad: number
  st_mass: number
  st_met: number
  st_lum: number
  st_logg: number
  st_dens: number
  st_rotp: number
  ra: number
  dec: number
  glat: number
  glon: number
  elat: number
  elon: number
  sy_dist: number
  sy_vmag: number
  sy_kmag: number
  sy_gaiamag: number
}

const ExoplanetSchema = new mongoose.Schema<Exoplanets>({
  pl_name: String,
  hostname: String,
  pl_letter: String,
  sy_snum: Number,
  sy_pnum: Number,
  sy_mnum: Number,
  cb_flag: Number,
  discoverymethod: String,
  disc_year: Number,
  disc_facility: String,
  pl_controv_flag: Number,
  pl_orbper: Number,
  pl_orbsmax: Number,
  pl_rade: Number,
  pl_radj: Number,
  pl_bmasse: Number,
  pl_bmassj: Number,
  pl_dens: Number,
  pl_orbeccen: Number,
  pl_orbincl: Number,
  ttv_flag: Number,
  pl_imppar: Number,
  st_spectype: String,
  st_rad: Number,
  st_mass: Number,
  st_met: Number,
  st_lum: Number,
  st_logg: Number,
  st_dens: Number,
  st_rotp: Number,
  ra: Number,
  dec: Number,
  glat: Number,
  glon: Number,
  elat: Number,
  elon: Number,
  sy_dist: Number,
  sy_vmag: Number,
  sy_kmag: Number,
  sy_gaiamag: Number,
})

export default mongoose.models.Exoplanet || mongoose.model<Exoplanets>('Exoplanet', ExoplanetSchema)