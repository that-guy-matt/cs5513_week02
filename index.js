const http = require("http");
const fs = require("fs").promises;
const host = 'localhost';
const port = 8080;

const requestListener = function(req, res){
    //TODO change this to json, finish rendering json recipes to recipes page
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    switch(req.url){
        case '/':
            res.writeHead(200);
            fs.readFile(__dirname + "/recipes.html")
                .then(
                    recipes => {
                        res.end(recipes);
                    }
                )
            break;
        
        default:
            res.writeHead(200);
            fs.readFile(__dirname + "/recipes.html")
                .then(
                    recipes => {
                        res.end(recipes);
                    }
                )

            break;
    }   
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});