import { createSelector } from 'reselect/es'

// vyroba elektrickej energie (zadane rucne)
const vyrobaelektriny = (state) => state

export const bat = createSelector(
  vyrobaelektriny,
  ve => ({
    veez: { // vyroba elektrickej energie na zdroji
      ...ve.veez,
      bat: ve.veez.tpv + ve.veez.tpz
    },
    dszse: { // dodavka do siete ZSE
      ...ve.dszse,
      bat: ve.dszse.tpv + ve.dszse.tpz
    },
    dree: { // dodavka regulacnej elektrickej energie
      ...ve.dree,
      bat: ve.dree.tpv + ve.dree.tpz
    },
    vsee: { // vlastna spotreba elektrickej energie
      ...ve.vsee,
      bat: ve.vsee.tpv + ve.vsee.tpz
    }
  })
)