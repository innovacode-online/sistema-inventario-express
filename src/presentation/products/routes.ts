import { Router } from "express";
import { ProductsController } from "./controller";


export class ProductsRouter {

    static get routes(): Router {
        const router = Router();
        const controller = new ProductsController();
        

        return router;
    }

}