import { Router } from "express";
import { ProductsRouter } from "./products/routes";
import { CategoriesRouter } from './categories/routes';


export class AppInventoryRoutes {

    static get routes(): Router {
        const router = Router();

        router.use('/products', ProductsRouter.routes);
        router.use('/categories', CategoriesRouter.routes);
        
        return router;
    }


}