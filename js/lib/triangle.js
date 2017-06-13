var $ = require('jquery')

module.exports = function initTriangles () {
  $(window).on('load resize', function () {
    var width = $(window).innerWidth()
    var leftWidth = Math.round(width / 2)
    var rightWidth = leftWidth > (width / 2) ? leftWidth - 1 : leftWidth
    $('.triangle').css({'border-left-width': leftWidth + 'px', 'border-right-width': rightWidth + 'px'})
  })
}
