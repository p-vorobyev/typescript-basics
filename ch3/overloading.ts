interface Product {
    id: number,
    description: string
}

type NotFoundProduct = {
    found: boolean;
}

class ProductService {
    getProducts(id: number): Product;
    getProducts(desc: string): Product[];
    getProducts(by: number | string): Product | Product[] | NotFoundProduct {
        if (typeof by === "number") {
            return {id: by, description: 'Product by ID.'};
        } else if (typeof by === "string") {
            return [{id: 1, description: "Product by description."}, {id: 2, description: "Product by description."}]
        }

        return {found: false};
    }
}

function call() {
    const productService: ProductService = new ProductService();
    console.log(productService.getProducts('by desc'));
    console.log(productService.getProducts(1));
    // compile error
    // console.log(productService.getProducts());
}

call();
