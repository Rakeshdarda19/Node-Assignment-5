var http = require("http");

const httpServer = http.createServer((req,res) => {
    if(req.url == "/welcome"){
        res.writeHead(200)
        res.end("Welcome to Dominos!!")
    }
    else if(req.url == "/contact"){
        res.writeHead(200)
        res.end("{   phone: '18602100000',   email: 'guestcaredominos@jublfood.com' }")
    }
    else{
        res.writeHead(404)
        res.end("Page doesn't exist")
    }
});
httpServer.listen(8061, () => {
    console.log("Server is listening yo Port 8061..")
})

