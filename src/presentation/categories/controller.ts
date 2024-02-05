import { Request, Response } from "express";

import { CreateCategoryDto } from '../../domain';
import { CategoriesService } from "../../infraestructure";



export class CategoriesController {

    // LLAMAR AL SERVICIO
    public readonly categoriesService = new CategoriesService();

    async getAllCategories( req: Request, res: Response ) {
        const categories = await this.categoriesService.findAll();
        return res.json({ categories });
    }

    
    async getCategoryById( req: Request, res: Response ) {
        const { id } = req.params;
        await this.categoriesService.findOne(id)
            .then( category => res.json({ category }))
            .catch(error => res.status(404).json({ error }));
    }
    
    async createNewCategory( req: Request, res: Response ) {
        const [ error, createCategoryDto ] = CreateCategoryDto.create( req.body );
        // if( error ) return 
        await this.categoriesService.create( createCategoryDto! )
            .then( category => res.json({ message:'Categoria creada con exito', category }))
            .catch( error => res.status(404).json({ error }));
    }

    
    async deleteCategoryById( req: Request, res: Response ) {
        const { id } = req.params;
        await this.categoriesService.remove( id )
            .then(response => res.json({ message: response }));
    }

    
    async updateCategoryById( req: Request, res: Response ) {
        
    }


}