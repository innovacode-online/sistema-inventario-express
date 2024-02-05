import { Request, Response } from "express";
import { ProductsService } from '../../infraestructure/products/service';
import { CreateProductDto } from '../../domain/dtos/products/create-product.dto';


export class ProductsController {
    // CREAR SERVICIO
    // public readonly productService = new ProductsService();
    // public readonly app = express();

    constructor(
        private readonly productService: ProductsService,
    ){}
    
    // CREAR LOS METODOS DE CONTROLADOR
    async getAllProducts( req: Request, res: Response ){
        // LLAMAR A CASOS DE USO
        const products = await this.productService.findAll();
        return res.json({ products });
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