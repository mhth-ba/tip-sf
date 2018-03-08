const format = require('date-fns/format')

let DateTime = (date, formatStr = 'dddd Do MMMM YYYY HH:mm:ss') => {
    return format(new Date(date * 1000), formatStr, {
        locale: require('date-fns/locale/sk')
    })
}

exports.default = DateTime
module.exports = exports['default']