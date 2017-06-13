var fadeInArcticle = require('./fade-in-article')
var scrollToHash = require('./scroll-to-hash')
var initMobileNav = require('./mobile-nav')
var initTriangles = require('./triangle')

module.exports = function initPage () {
  fadeInArcticle()
  scrollToHash()
  initMobileNav()
  initTriangles()
}
