const format = require('date-fns/format')

let dateTime = (date, formatStr = 'dddd Do MMMM YYYY HH:mm:ss') => {
    const dateObject = new Date(date * 1000)

    return format(dateObject, formatStr, {
        locale: require('date-fns/locale/sk')
    })
}

exports.default = dateTime
module.exports = exports['default']