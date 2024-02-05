

interface DtoObject {
    [ key: string ]: any;
}


export class CreateCategoryDto {

    private constructor(
        public name: string,
        public description: string,
    ){};

    static create( object: DtoObject ): [ string?, CreateCategoryDto? ]{

        const { name, description } = object;

        if( !name ) return ['El nombre del producto es obligatorio', undefined];
        if( !description ) return ['La descripcion del producto es obligatoria', undefined];

        return [
            undefined,
            new CreateCategoryDto( name, description ),
        ]


    }
}