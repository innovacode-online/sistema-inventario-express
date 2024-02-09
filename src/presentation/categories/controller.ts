import { Request, Response } from "express";

import { CreateCategoryDto } from '../../domain';
import { CategoriesService } from "../../infraestructure";

export class CategoriesController {

    constructor(
        private readonly categoriesService: CategoriesService,
    ){}


    getAllCategories = async ( req: Request, res: Response ) => {
        await this.categoriesService.findAll()
            .then( categories => res.json({ categories }))
            .catch(error => res.status(error.statusCode).json({ message: error.message }) );   
    }

    
    getCategoryById = async ( req: Request, res: Response ) => {
        const { id } = req.params;
        await this.categoriesService.findOne(id)
            .then( category => res.json({ category }))
            .catch(error => res.status(error.statusCode).json({ message: error.message }));
    }
    
    createNewCategory = async ( req: Request, res: Response ) => {
        const [ error, createCategoryDto ] = CreateCategoryDto.create( req.body );
        if( error ) return res.status(400).json({ message: error });
        await this.categoriesService.create( createCategoryDto! )
            .then( category => res.json({ message:'Categoria creada con exito', category }))
            .catch(error => res.status(error.statusCode).json({ message: error.message }) );
    }

    
    deleteCategoryById = async ( req: Request, res: Response ) => {
        const { id } = req.params;
        await this.categoriesService.remove( id )
            .then(response => res.json({ message: response }))
            .catch(error => res.status(error.statusCode).json({ message: error.message }) );;
    }

    
    updateCategoryById = async ( req: Request, res: Response ) => {
        
    }


}