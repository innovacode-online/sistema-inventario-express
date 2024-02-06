import { CreateProductDto } from "../../domain/dtos/products/create-product.dto";

// CASOS DE USO
export class ProductsService {

    findAll(){
        console.log('Find all products')
    }

    async findOne( term: string | number ){
        
    }

    async create( createProductDto: CreateProductDto ){
        
    }

    async update(){
        
    }

    async remove(id: string | number){
        
    }
}