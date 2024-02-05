import { Router } from "express";
import { CategoriesController } from './controller';

export class CategoriesRouter {
    
    static get routes(): Router {
        const router = Router();
        const controller = new CategoriesController();

        router.get('/', controller.getAllCategories);
        router.get('/:id', controller.getCategoryById);
        router.put('/:id', controller.updateCategoryById);
        router.post('/', controller.createNewCategory);
        router.delete('/:id', controller.deleteCategoryById);
    
        return router;
    }
}