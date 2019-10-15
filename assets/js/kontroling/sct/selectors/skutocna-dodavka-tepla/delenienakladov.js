import { createSelector } from 'reselect/es'

// delenie nakladov podla energetickej metody (zadane rucne)
const delenienakladov = (state) => state

export const klucovanie = createSelector(
  delenienakladov,
  dn => ({
    vtdt: { // vyuzitelne teplo na dodavku tepla
      ...dn.vtdt,
      klc: (dn.vtdt.tpv + dn.vtdt.tpz) / (dn.vtdt.tpv + dn.vtdt.tpz + dn.tsve.tpv + dn.tsve.tpz)
    },
    tsve: { // teplo spotrebovane na vyrobu elektriny
      ...dn.tsve,
      klc: (dn.tsve.tpv + dn.tsve.tpz) / (dn.tsve.tpv + dn.tsve.tpz + dn.vtdt.tpv + dn.vtdt.tpz)
    }
  })
)