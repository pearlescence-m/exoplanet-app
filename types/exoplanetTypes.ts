declare module 'Exoplanets' { 
  export interface Exoplanets  {
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

  export interface ExoplanetPropsWithID {
    id: string;
    [key: string]: any;
  }
}