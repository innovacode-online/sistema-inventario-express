

interface DtoObject {
    [ key: string ]: any;
}


export class CreateProductDto {

    private constructor(
        public name: string,
        public slug: string,
        public categoryId: string,
        public description: string,
    ){};

    static create( object: DtoObject ): [ string?, CreateProductDto? ]{

        const { name, slug, categoryId, description } = object;

        if( !name ) return ['El nombre del producto es obligatorio', undefined];
        if( !slug ) return ['Debe asignar un slug', undefined];
        if( !description ) return ['La descripcion del producto es obligatoria', undefined];
        if( !categoryId ) return ['Debe asignar una categoria', undefined];

        return [
            undefined,
            new CreateProductDto( name, slug, categoryId, description ),
        ]


    }
}