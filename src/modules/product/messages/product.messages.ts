export enum PublicProductMessage{
    NOT_FOUND_CODE = 'Product with this code not found, check the code and try again.',
    NOT_FOUND_ID = 'Product with this id not found, check the id and try again.'
}

export enum CreateProductMessage{
    SUCCESS = 'Product created successfully.',
    ERROR = 'Failed to create product.',
    ALREADY_EXISTS = 'Product with this code already exists.',
    NOT_FOUND_CATEGORY = 'Category not found, Check the category id and try again'
}

export enum RemoveProductMessage{
    SUCCESS = 'Product removed successfully.',
    ERROR = 'Failed to remove product.',
    NOT_FOUND_ID = 'Product with this id not found, check the id and try again.'
}
export enum UpdateProductMessage{
    SUCCESS = 'Product removed successfully.',
    ERROR = 'Failed to remove product.',
    NOT_FOUND_ID = 'Product with this id not found, check the id and try again.',
    ALREADY_EXISTS = 'Product with this code already exists.',

}


