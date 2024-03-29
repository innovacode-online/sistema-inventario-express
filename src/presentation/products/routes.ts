import { Router } from "express";
import { ProductsController } from "./controller";
import { ProductsService } from '../../infraestructure/products/service';


export class ProductsRouter {


    
    static get routes(): Router {
        const router = Router();
        const controller = new ProductsController( );

        router.get('/', controller.getAllProducts);
        router.get('/:id', controller.getProductById);
        router.post('/', controller.createNewProduct);
        router.delete('/:id', controller.deleteProductById);
        router.put('/:id', controller.updateProductById);
        

        return router;
    }

}