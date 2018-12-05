import * as http from "http"

class Main {

    constructor() {
        const server = http.createServer(
            (req: http.IncomingMessage, res: http.ServerResponse) =>
                this.requestHandler(req, res)
        )
        
        server.listen("5000")
    }

    private requestHandler(req: http.IncomingMessage, 
                           res: http.ServerResponse): void {
        res.end("Hello! Node.js with TypeScript")
    }
}

const main = new Main()
