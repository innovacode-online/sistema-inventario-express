import { CreateCategoryDto, CustomError } from "../../domain";



// CASOS DE USO
export class CategoriesService {

    async findAll(){



        throw CustomError.notFound("No se encontro el servidor") 
    }

    async findOne( term: string | number ){
        
    }

    async create( createCategoryDto: CreateCategoryDto ){
        
    }

    async update(){
        
    }

    async remove(id: string | number){
        
    }
}