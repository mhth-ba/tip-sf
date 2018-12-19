import React from 'react'
const format = require('date-fns/format')
const NumberFormat = require('react-number-format')

let dateTime = (date, formatStr = 'dddd Do MMMM YYYY HH:mm:ss') => {
  const dateObject = new Date(date * 1000)

  return format(dateObject, formatStr, {
    locale: require('date-fns/locale/sk')
  })
}

let date = (date, formatStr = 'Do MMMM YYYY, dddd') => {
  const dateObject = new Date(date * 1000)

  return format(dateObject, formatStr, {
    locale: require('date-fns/locale/sk')
  })
}

let dateShort = (date, formatStr = 'Do MMMM YYYY') => {
  const dateObject = new Date(date * 1000)

  if (date === null) return null

  return format(dateObject, formatStr, {
    locale: require('date-fns/locale/sk')
  })
}

let dateMonthYear = (date, formatStr = 'MMMM YYYY') => {
  const dateObject = new Date(date * 1000)

  if (date === null) return null

  return format(dateObject, formatStr, {
    locale: require('date-fns/locale/sk')
  })
}

let number = (number, decimals = 0, type = 'text') => {
  return <NumberFormat value={number} decimalScale={decimals} displayType={type}
                       thousandSeparator={' '} decimalSeparator={','} className="text-nowrap" />
}

//exports.default = dateTime
//module.exports = exports['default']

module.exports = { dateTime, date, dateShort, dateMonthYear, number }