import { Router } from "express";
import { CategoriesController } from './controller';
import { CategoriesService } from "../../infraestructure";

export class CategoriesRouter {
    
    static get routes(): Router {
        const router = Router();
        const categoriesService = new CategoriesService();
        const controller = new CategoriesController( categoriesService );

        router.get('/', controller.getAllCategories);
        router.get('/:id', controller.getCategoryById);
        router.put('/:id', controller.updateCategoryById);
        router.post('/', controller.createNewCategory);
        router.delete('/:id', controller.deleteCategoryById);
    
        return router;
    }
}