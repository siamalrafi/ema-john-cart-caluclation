import { getStoredCart } from "../../utilities/fakedb";

export const ProductsAddToCart = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const savedCart = getStoredCart();
    const intialCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);

        if (savedCart) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            intialCart.push(addedProduct);
        }
    }


    return { products: products, intialCart: intialCart };
}