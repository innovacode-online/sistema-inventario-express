import { Router } from "express";
import { ProductsRouter } from "./products/routes";


export class AppInventoryRoutes {

    static get routes(): Router {
        const router = Router();

        router.use('/products', ProductsRouter.routes);
        
        return router;
    }


}