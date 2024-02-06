import { Request, Response } from "express";
import { ProductsService } from '../../infraestructure/products/service';
import { CreateProductDto } from '../../domain/dtos/products/create-product.dto';


export class ProductsController {

    private readonly productService = new ProductsService();

    getAllProducts = async (req: Request, res: Response) => {
        this.productService.findAll();
        // Resto del código...
    }

    async getProductById( req: Request, res: Response ){
        const id = req.params.id;
        const product = await this.productService.findOne( id );
        return res.json({ product });
    }

    async createNewProduct(req: Request, res: Response){
        const [ error, createProductDto ] = CreateProductDto.create( req.body );
        
        // TODO: VALIDACIONES
        await this.productService.create( createProductDto! )
            .then(product => res.json({ product }));
    }

    async deleteProductById(req: Request, res: Response){
        const id = req.params.id;
        await this.productService.remove( id )
            .then( response => res.json(response) );
    }

    async updateProductById(req: Request, res: Response){
        
    }
}