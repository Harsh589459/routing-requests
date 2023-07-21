const http = require('http');


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    const url = req.url;
    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>My first Pate</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
       return  res.end();
    }
    else if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>My first Pate</title></head>')
        res.write('<body><h1>Welcom to Aout Us Page</h1></body>')
        res.write('</html>')
        return res.end();
    }
    else if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>My first Pate</title></head>')
        res.write('<body><h1>Welcom to Node Js Project</h1></body>')
        res.write('</html>')
       return  res.end();
    }

    else{
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>')
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>')
            res.write('</html>')
           return res.end();
        
    }

})
server.listen(4000);