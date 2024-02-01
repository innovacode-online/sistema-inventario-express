import express, { Router } from "express";

export interface ServerOptions {
    port: number;
    routes: Router;
}

export class Server {
    
    public readonly app = express();
    
    public readonly port: number;
    public readonly routes: Router;


    constructor( options: ServerOptions ) {
        const { routes, port } = options;

        this.port = port;
        this.routes = routes;
    }


    async start(){
        this.app.use(express.json());

        this.app.listen(this.port, () => {
            console.log('Server listening on port ' + this.port);
        })

    }

}