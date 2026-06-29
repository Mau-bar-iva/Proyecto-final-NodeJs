import * as productService from '../models/products.model.js';

export const getAllProducts = () => {
    return productService.getAllProducts();
}

export const getProductById = async (id) => {
    return productService.getProductById(id);
};

export const createProduct = async (productData) => {
    return productService.saveProducts(productData);
};

export const deleteProduct = async (id) => {
    return productService.deleteProduct(id);
}