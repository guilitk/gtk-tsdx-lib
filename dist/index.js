
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./gtk-tsdx-lib.cjs.production.min.js')
} else {
  module.exports = require('./gtk-tsdx-lib.cjs.development.js')
}
