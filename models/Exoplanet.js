import mongoose from 'mongoose'

const ExoplanetSchema = new mongoose.Schema({
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

// ExoplanetSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   },
// })

export default mongoose.models.Exoplanet || mongoose.model('Exoplanet', ExoplanetSchema)