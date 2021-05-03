// will not be presented in result js file
interface Product {
    id: number;
    description: string
}

interface IProductService {

    getProducts(): Product[];

    getProduct(id: number): Product;

}

class ProductServiceImpl implements IProductService {

    getProduct(id: number): Product {
        return {id: id, description: 'Product by ID.'};
    }

    getProducts(): Product[] {
        return [
            {id: 1, description: "Product by description."},
            {id: 2, description: "Product by description."}
        ];
    }

}

const service: IProductService = new ProductServiceImpl();
console.log(service.getProduct(7));
console.log(service.getProducts());
