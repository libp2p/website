var fadeInArcticle = require('./fade-in-article')
var scrollToHash = require('./scroll-to-hash')
var initTopbar = require('./topbar')
var initTriangles = require('./triangle')

module.exports = function initPage () {
  fadeInArcticle()
  scrollToHash()
  initTopbar()
  initTriangles()
}
