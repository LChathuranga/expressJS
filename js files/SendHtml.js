const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./html pages/home.html')
const homestyle = readFileSync('./html pages/style.css')
const logo = readFileSync('./html pages/img.png')

const server = http.createServer((req, res) => {

    const url = req.url

    if(url === '/'){
        //respond headers
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }else if(url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homestyle)
        res.end()
    }else if(url === '/img.png'){
        res.writeHead(200, {'content-type': 'image/png'})
        res.write(logo)
        res.end()
    }else{
        //404 page
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
    
})

server.listen(5000)