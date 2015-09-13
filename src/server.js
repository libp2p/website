var http = require('http')
var fs = require('fs')

var versions = fs.readFileSync(process.cwd() + '/versions', 'utf8')
                              .trim().split('\n')
var last = versions[versions.length - 1]

console.log('current:', last)

var server = http.createServer(function (req, res) {
  if (req.url === '/versions') {
    res.write(JSON.stringify({
      versions: versions
    }))
    return res.end()
  }

  res.writeHead(302, {
    Location: 'http://localhost:8080/ipfs/' + last
  })

  res.end()

})

function ready () {
  console.log('Listening on http://localhost:' +
             (parseInt(process.env.PORT, 10) || 9090))
}

server.listen(parseInt(process.env.PORT, 10) || 9090, ready)
