import { Request, Response } from "express";
import { ProductsService } from '../../infraestructure/products/service';
import { CreateProductDto } from '../../domain/dtos/products/create-product.dto';


export class ProductsController {

    constructor(
        private readonly productService: ProductsService,
    ){}
    
    // CREAR LOS METODOS DE CONTROLADOR
    getAllProducts = async ( req: Request, res: Response ) => {
        // LLAMAR A CASOS DE USO
        await this.productService.findAll()
            .then( products => res.json({ products }))
            .catch(({ statusCode, message }) => res.status(statusCode).json({ message }));
    }

    getProductById = async ( req: Request, res: Response ) => {
        
        const id = req.params.id;

        await this.productService.findOne( id )
            .then( product => res.json({ product }))
            .catch(({ statusCode, message }) => res.status(statusCode).json({ message }));
    }

    createNewProduct = async ( req: Request, res: Response ) => {
        const [ error, createProductDto ] = CreateProductDto.create( req.body );
        
        if( error ) return res.status(400).json({ message: error })

        await this.productService.create( createProductDto! )
            .then( product => res.json({ product }))
            .catch(({ statusCode, message }) => res.status(statusCode).json({ message }));
    }

    deleteProductById = async ( req: Request, res: Response ) => {
        const id = req.params.id;
        
        await this.productService.remove( id )
            .then( response => res.json( response ))
            .catch(({ statusCode, message }) => res.status(statusCode).json({ message }));
    }

    updateProductById = async ( req: Request, res: Response ) => {
        
    }
}